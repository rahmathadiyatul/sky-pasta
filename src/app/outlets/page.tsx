"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Box, Button, Card, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import Header from "../header/page";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Close } from "@mui/icons-material";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

interface Outlet {
    name: string;
    coordinates: [number, number];
    address: string;
    properties: any;
    gmapsUrl: string;
}

const outlets: Outlet[] = [
    {
        name: "Sky Pasta Pamulang",
        coordinates: [106.73008806816571, -6.344073764480272],
        address: "Jl. Witana Harja, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417",
        properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
        },
        gmapsUrl: "https://maps.app.goo.gl/ZT7wS4ExXjDhbQNW6",
    },
    {
        name: "Sky Pasta Cinere",
        coordinates: [106.78612099990404, -6.319792937440153],
        address: "Jl. Punak No.6, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat 15416",
        properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
        },
        gmapsUrl: "https://maps.app.goo.gl/GsjZp2xvdDXgJfFg7",
    },
    {
        name: "Sky Pasta Tebet",
        coordinates: [106.85347486921602, -6.230645831452489],
        address: "Jl. Tebet Timur Dalam Raya No.5, RT.8/RW.4, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820",
        properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
        },
        gmapsUrl: "https://maps.app.goo.gl/4GALK5d6Vhhv6Jjk9",
    },
    {
        name: "Sky Pasta Petukangan",
        coordinates: [106.74506029196806, -6.233200221706799],
        address: "Jl. H. Muchtar Raya No.66, RT.002/RW.1, Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12260",
        properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
        },
        gmapsUrl: "https://maps.app.goo.gl/f4Tt5SLwwRkA2wTD8",
    },
    {
        name: "Sky Pasta Ciledug",
        coordinates: [106.71643433059205, -6.239848873680398],
        address: "Samping terminal bus sinar jaya, Jl. Cipto Mangunkusumo, RT.003/RW.010, Paninggilan Utara, Kec. Ciledug, Kota Tangerang, Banten 15153",
        properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
        },
        gmapsUrl: "https://maps.app.goo.gl/ZjANL89QLrf3tuPE7",
    },
    {
        name: "Sky Pasta Bekasi",
        coordinates: [106.96816899990401, -6.254836763011715],
        address: "Jl. Surya Raya No.385 B Blok B, RT.003/RW.010, Jaka Setia, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17147",
        properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
        },
        gmapsUrl: "https://maps.app.goo.gl/Ez5N8td2a9QbGnrW6",
    },
    {
        name: "Sky Pasta Binus Jakbar",
        coordinates: [106.78272453059202, -6.202472485591147],
        address: "Jl. Rw. Belong No.38-34, RT.7/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540",
        properties: {
            message: 'Bar',
            imageId: 870,
            iconSize: [50, 50]
        },
        gmapsUrl: "https://maps.app.goo.gl/9SsfpyRK5HmSNXwP7",
    },
];

export default function Outlets() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: [106.83008806816571, -6.304073764480272],
            zoom: 10,
        });

        const markers: mapboxgl.Marker[] = [];

        outlets.forEach((outlet) => {
            const el = document.createElement("div");
            const width = outlet.properties.iconSize[0];
            const height = outlet.properties.iconSize[1];
            el.className = 'marker';
            el.style.backgroundImage = `url('/logo.png')`;
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.backgroundSize = "contain";
            el.style.display = 'block';
            el.style.border = 'none';
            el.style.borderRadius = '50%';
            el.style.cursor = 'pointer';
            el.style.padding = "none";

            const marker = new mapboxgl.Marker(el).setLngLat(outlet.coordinates).addTo(map);
            markers.push(marker);

            marker.getElement().addEventListener("click", () => {
                setSelectedOutlet(outlet);
            });
        });

        map.on("click", (e) => {
            const { lng, lat } = e.lngLat;
            console.log("Clicked Coordinates:", lng, lat);

            let closestOutlet = null;
            let minDistance = Number.MAX_VALUE;

            outlets.forEach((outlet) => {
                const [outletLng, outletLat] = outlet.coordinates;
                const distance = Math.sqrt(
                    Math.pow(outletLng - lng, 2) + Math.pow(outletLat - lat, 2)
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    closestOutlet = outlet;
                }
            });

            if (closestOutlet) setSelectedOutlet(closestOutlet);
        });

        return () => {
            map.remove();
            markers.forEach((marker) => marker.remove());
        };
    }, []);

    const handleNavigation = (selectedOutlet: any) => {
        console.log(selectedOutlet.gmapsUrl)
        window.open(selectedOutlet?.gmapsUrl, "_blank")
    }

    return (
        <Box>
            <Header />
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                <Box
                    ref={mapContainerRef}
                    sx={{
                        width: "100%",
                        height: "100vh",
                    }}
                />
                {selectedOutlet && (
                    <Card
                        sx={{
                            width: { xs: "80%", md: "30%" },
                            padding: 2,
                            margin: 2,
                            position: { xs: "absolute", md: "relative" },
                        }}
                    >
                        <IconButton
                            onClick={() => setSelectedOutlet(null)}
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                                color: "#c72026",
                            }}
                        >
                            <Close />
                        </IconButton>
                        <CardMedia
                            sx={{ mt: 5, mb: 2 }}
                            component="img"
                            height="140"
                            image={`${selectedOutlet?.name}.jpg`}
                            alt={selectedOutlet?.name}
                        ></CardMedia>
                        <Typography fontWeight="bolder" color="#c72026" variant="h5">{selectedOutlet?.name}</Typography>
                        <Typography fontSize={14}>{selectedOutlet?.address}</Typography>
                        <CardActions sx={{ margin: 0, padding: 0 }}>
                            <Button
                                sx={{ mt: 10, borderRadius: 3 }}
                                variant="contained"
                                color="primary"
                                onClick={() => handleNavigation(selectedOutlet)}
                            >
                                Navigate
                            </Button>
                        </CardActions>
                    </Card>
                )}
            </Box>
        </Box>
    );
}

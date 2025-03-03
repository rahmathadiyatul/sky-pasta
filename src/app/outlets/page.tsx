"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Box, Card, Typography } from "@mui/material";
import Header from "../header/page";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

interface Outlet {
    name: string;
    coordinates: [number, number];
    address: string;
}

const outlets: Outlet[] = [
    {
        name: "Sky Pasta Pamulang",
        coordinates: [106.73008806816571, -6.344073764480272],
        address: "Jl. Witana Harja, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417",
    },
    {
        name: "Sky Pasta Cinere",
        coordinates: [106.78612099990404, -6.319792937440153],
        address: "Jl. Punak No.6, Pangkalan Jati, Kec. Cinere, Kota Depok, Jawa Barat 15416",
    },
    {
        name: "Sky Pasta Tebet",
        coordinates: [106.85347486921602, -6.230645831452489],
        address: "Jl. Tebet Timur Dalam Raya No.5, RT.8/RW.4, Tebet Tim., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12820",
    },
    {
        name: "Sky Pasta Petukangan",
        coordinates: [106.74506029196806, -6.233200221706799],
        address: "Jl. H. Muchtar Raya No.66, RT.002/RW.1, Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12260",
    },
    {
        name: "Sky Pasta Ciledug",
        coordinates: [106.71643433059205, -6.239848873680398],
        address: "Samping terminal bus sinar jaya, Jl. Cipto Mangunkusumo, RT.003/RW.010, Paninggilan Utara, Kec. Ciledug, Kota Tangerang, Banten 15153",
    },
    {
        name: "Sky Pasta Bekasi",
        coordinates: [106.96816899990401, -6.254836763011715],
        address: "Jl. Surya Raya No.385 B Blok B, RT.003/RW.010, Jaka Setia, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17147",
    },
    {
        name: "Sky Pasta Binus Jakbar",
        coordinates: [106.78272453059202, -6.202472485591147],
        address: "Jl. Rw. Belong No.38-34, RT.7/RW.15, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11540",
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
            center: [106.73008806816571, -6.344073764480272],
            zoom: 12,
        });

        outlets.forEach((outlet) => {
            const el = document.createElement("div");
            const width = marker.properties.iconSize[0];
            const height = marker.properties.iconSize[1];
            el.className = "custom-marker";
            el.style.backgroundImage = `url('/logo.png')`; // Custom icon URL
            el.style.width = "50px"; // Adjust size
            el.style.height = "50px";
            el.style.backgroundSize = "contain";
            el.style.backgroundRepeat = "no-repeat";
            el.style.position = "absolute"; // Ensure correct positioning
            el.style.transform = "translate(-50%, -50%)"; // Center the marker

            const marker = new mapboxgl.Marker(el)
                .setLngLat(outlet.coordinates)
                //.setOffset([0, 0]) // Ensure no unwanted offset
                .addTo(map);

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

        return () => map.remove();
    }, []);

    return (
        <Box>
            <Header />
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                <Box
                    ref={mapContainerRef}
                    sx={{
                        width: "70%",
                        height: "100vh",
                    }}
                />
                {selectedOutlet && (
                    <Card sx={{ width: "30%", padding: 2, margin: 2 }}>
                        <Typography variant="h5">{selectedOutlet.name}</Typography>
                        <Typography variant="body1">{selectedOutlet.address}</Typography>
                    </Card>
                )}
            </Box>
        </Box>
    );
}

"use client";

import React, { useState } from "react";
import { Box, CardMedia, ThemeProvider, CssBaseline, Typography, Card, CardActionArea, CardContent, Divider } from "@mui/material";
import Header from "../header/page";
import theme from "@/lib/theme";
import { Description, Person } from "@mui/icons-material";
import CardDetails from "@/components/CardDetails";

export default function About() {
    const [selectedCard, setSelectedCard] = useState<number>(0);
    const [openCard, setOpenCard] = useState<boolean>(false);
    const cards = [
        {
            id: 1,
            title: 'Visi',
            imageUrl: '/visi-card.png',
            bg: '/visi-bg.jpg',
            description: "Membangun Sky Pasta menjadi brand kuliner lokal berskala internasional yang menyajikan makanan berkelas terbaik dengan harga yang terjangkau dan bisa dinikmati seluruh lapisan masyarakat di Indonesia demi pemenuhan gaya hidup."
        },
        {
            id: 2,
            title: 'Sejarah',
            imageUrl: '/history-card.png',
            bg: 'sejarah-bg.jpg',
            bg2: 'sejarah2-bg.jpg',
            description: "Brand Sky Pasta didirikan ketika melihat adanya peluang bisnis di bidang kuliner dengan mengusung konsep makan berkualitas dengan harga terjangkau.",
            description2: (
                <>
                    Di 2025 Sky Pasta telah sukses mengembangkan 7 cabang outlet yaitu: <strong>Pamulang, Cinere, Ciledug, Petukangan, Binus Jakbar, Tebet, dan Bekasi.</strong>
                </>
            ),
        },
        {
            id: 3,
            title: 'Tim Manajemen',
            imageUrl: '/team-card.png',
            bg: '/team-bg.jpg',
            description: ''
        },
        {
            id: 4,
            title: 'Prestasi',
            imageUrl: '/award-card.png',
            bg: '/prestasi-bg.jpg',
            description: (
                <>
                    <strong>Agus Setiawan</strong> - Barista Sky Pasta yang berhasil meraih Juara 3 kompetisi JCC (Jakarta Coffee Championship)- Kota Kasablanka 8 September 2024.
                </>
            )
        },
        {
            id: 5,
            title: 'Event',
            imageUrl: '/event-card.png',
            bg: 'event-bg.jpg',
            bg2: 'event2-bg.jpg',
            description: "Berikut merupakan beberapa event yang telah diselenggarakan oleh Sky Pasta.",
            description2: (<></>),
        },
        {
            id: 6,
            title: 'Testimoni',
            imageUrl: '/testi-card.png',
            bg: '/testi-bg.png',
            bg2: '/testi2-bg.jpg',
            description: (
                <>
                    <strong>Rika Agustina on Google</strong> - Kesan pertama langsung dibuat nyaman, pelayanannya ramah banget..
                </>
            ),
            description2: (
                <>
                    <strong>Kaarpuut on Tiktok</strong> - Semua menu di Sky Pasta tidak ada yang mengecewakan. Rasa? Enak. Harga? Affordable. Tempat? Super duper nyaman. Pelayanan? Bintang 100 seluruh staff ramah.
                </>
            )
        },
    ];

    const onClickCard = (index: number) => {
        setSelectedCard(index);
        setOpenCard(true);
    }

    const onCloseCard = () => {
        setSelectedCard(0);
        setOpenCard(false);
    }

    return (
        <Box>
            {openCard && (
                <CardDetails onClose={onCloseCard} details={cards[selectedCard]} />
            )}
            <Header />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 500,
                    width: "100%",
                    mt: { xs: 5, sm: 5, md: 0 },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url('/line-bg.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.8,
                        zIndex: -1,
                    },
                }}>
                <Box
                    sx={{
                        width: '70%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                        gap: 5,
                    }}
                >
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                borderRadius: 5,
                                backgroundColor: "white",
                                border: "1px solid silver",
                                '&:hover': {
                                    transform: 'scale(1.01)'
                                }
                            }}
                        >
                            <CardActionArea
                                onClick={() => onClickCard(index)}
                                data-active={selectedCard === index ? '' : undefined}
                                sx={{
                                    height: '100%',
                                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                    '&[data-active]': {
                                        backgroundColor: "rgba(0,0,0,.1)",
                                        '&:hover': {
                                            backgroundColor: 'action.selectedHover',
                                            transform: 'scale(1.01)',
                                            boxShadow: 6,
                                        },
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.imageUrl}
                                    alt={card.title}
                                />
                                <Divider />
                                <CardContent
                                    data-active={selectedCard === index ? '' : undefined}
                                    sx={{
                                        backgroundColor: "#c72026",
                                        height: '100%',
                                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                        '&[data-active]': {
                                            backgroundColor: "#c72026",
                                            '&:hover': {
                                                backgroundColor: 'action.selectedHover',
                                                transform: 'scale(1.01)',
                                                boxShadow: 6,
                                            },
                                        }
                                    }}>
                                    <Typography
                                        color="white"
                                        fontWeight={"bolder"}
                                        textAlign={"center"}
                                        fontFamily={"Nunito"}
                                        variant="h5"
                                        component="div"
                                        whiteSpace="nowrap"
                                    >
                                        {card.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}></Box>
            </Box>
        </Box >
    );
}

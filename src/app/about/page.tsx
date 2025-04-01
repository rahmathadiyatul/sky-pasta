"use client";

import React, { useState } from "react";
import { Box, CardMedia, Typography, Card, CardActionArea, CardContent, Divider } from "@mui/material";
import Header from "../header/page";
import CardDetails from "@/components/CardDetails";
import { cards } from "../../database/page";

export default function About() {
    const [selectedCard, setSelectedCard] = useState<number>(0);
    const [openCard, setOpenCard] = useState<boolean>(false);

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
                    minHeight: { xs: 450, md: 600 },
                    width: "100%",
                    mt: { xs: 5, sm: 5, md: 0 },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
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
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 40%), 1fr))',
                        gap: 5,
                    }}
                >
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                borderRadius: 3,
                                backgroundColor: "white",
                                fontFamily: "Nunito",
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
                                    sx={{ height: { xs: 70, md: 140 }, userSelect: "none", pointerEvents: "none" }}
                                    image={card.imageUrl}
                                    alt={card.title}
                                />
                                <Divider />
                                <CardContent
                                    data-active={selectedCard === index ? '' : undefined}
                                    sx={{
                                        backgroundColor: "#c72026",
                                        height: '1rem',
                                        padding: { xs: "1rem 0", md: "1.5rem 0" },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
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
                                        sx={{ fontSize: { xs: ".85rem", md: "1.25rem" } }}
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
            </Box>
        </Box >
    );
}

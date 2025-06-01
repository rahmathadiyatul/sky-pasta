"use client"

import React, { useState } from "react"
import { Box, CardMedia, Typography, Card, CardActionArea, CardContent, Divider } from "@mui/material"
import Header from "../header/page"
import CardDetails from "@/components/CardDetails"
import { cards } from "../../database/page"

export default function About() {
    const [selectedCard, setSelectedCard] = useState<number>(0)
    const [openCard, setOpenCard] = useState<boolean>(false)

    const onClickCard = (index: number) => {
        setSelectedCard(index)
        setOpenCard(true)
    }

    const onCloseCard = () => {
        setSelectedCard(0)
        setOpenCard(false)
    }

    return (
        <Box
            sx={{
                backgroundImage: "url('/history-card.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundSize: "250px 300px",
            }}
        >
            {openCard && (
                <CardDetails onClose={onCloseCard} details={cards[selectedCard]} />
            )}
            <Header />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
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
                <Typography
                    sx={{
                        fontSize: { xs: "1.5rem", md: "2rem" },
                        fontWeight: "bold",
                        maxWidth: "60%",
                        color: "#c72026",
                        fontStyle: "italic",
                        textAlign: "center",
                        mb: 8,
                        fontFamily: "Nunito",
                    }}
                >"We don't just serve pasta, we serve the feeling of coming home to something better."</Typography>
                <Box
                    sx={{
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'row',
                        mb: 15,
                        ml: 4,
                        //gridAutoFlow: 'column',
                        //gridAutoColumns: 'minmax(200px, 1fr)',
                        gap: 3,
                        //overflowX: 'auto',
                        //padding: 1, // optional padding
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
                                width: 100,
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
                                    sx={{ height: { xs: 70, md: 80 }, userSelect: "none", pointerEvents: "none" }}
                                    image={card.imageUrl}
                                    alt={card.title}
                                />
                                <Divider />
                                <CardContent
                                    data-active={selectedCard === index ? '' : undefined}
                                    sx={{
                                        backgroundColor: "#c72026",
                                        height: '1rem',
                                        padding: { xs: "1rem 0", md: "1rem 0" },
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
                                        sx={{ fontSize: { xs: ".85rem", md: ".85rem" } }}
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
    )
}

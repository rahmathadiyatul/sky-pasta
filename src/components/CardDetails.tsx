"use client"

import { Close } from "@mui/icons-material"
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import React, { useState } from "react"

interface CardDetailsProps {
    onClose: () => void
    details: any
}

export default function CardDetails({ onClose, details }: CardDetailsProps) {
    const [showSecondPage, setShowSecondPage] = useState(false)

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: { xs: "flex-start", md: "center" },
                zIndex: 9999,
            }}
            onClick={onClose}
        >
            <Card
                sx={{
                    maxWidth: { xs: 350, md: 400 },
                    maxHeight: { xs: "85vh", md: "100vh" },
                    minWidth: "50vw",
                    bgcolor: "white",
                    boxShadow: 24,
                    mt: { xs: "15%", md: 0 },
                    p: 1,
                    borderRadius: 2,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <CardActionArea>
                    <CardContent
                        sx={{
                            mt: '10%',
                            padding: '0 4rem',
                        }}
                    >
                        <IconButton
                            onClick={onClose}
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                                color: "#c72026",
                                backgroundColor: "rgba(255,255,255,0.5)",
                                "&:hover": { backgroundColor: "rgba(255,255,255,0.7)" },
                            }}
                        >
                            <Close />
                        </IconButton>
                        <Typography
                            fontSize={30}
                            fontWeight={"bolder"}
                            fontFamily={"Nunito"}
                            textAlign={"center"}
                            color="#c72026"
                            gutterBottom
                            variant="h5"
                            marginBottom={0}
                        >
                            {!showSecondPage ? details.title : ""}
                        </Typography>
                        {details.title == 'History' && (
                            <Box sx={{ mt: 4, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <CardMedia
                                    component="img"
                                    image={showSecondPage && details.bg2 ? details.bg2 : details.bg}
                                    alt={`${details.title} Sky Pasta`}
                                    sx={{ borderRadius: '5px', maxHeight: { xs: 250, md: 250 }, maxWidth: 250, userSelect: "none", pointerEvents: "none" }}
                                />
                            </Box>
                        )}
                        <Typography textAlign={"center"} variant="body2" sx={{ mb: 3, mt: 4, color: 'text.secondary', fontWeight: "bold", fontFamily: "Nunito", fontSize: { xs: 12, md: 16 } }}>
                            {showSecondPage && details.description2 ? details.description2 : details.description}
                        </Typography>
                    </CardContent>
                    {details.title != 'History' && (
                        <Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", mb: details.id == 3 ? 5 : 0 }}>
                            <CardMedia
                                component="img"
                                image={showSecondPage && details.bg2 ? details.bg2 : details.bg}
                                alt={`${details.title} Sky Pasta`}
                                sx={{ maxHeight: { xs: 125, md: 250 }, maxWidth: details.id == 3 ? 500 : 250, userSelect: "none", pointerEvents: "none" }}
                            />
                        </Box>
                    )}
                </CardActionArea>
                <CardActions sx={{ justifyContent: "space-between" }}>
                    {showSecondPage && (
                        <Button
                            size="small"
                            sx={{ fontWeight: "bolder", color: 'black', fontFamily: "Nunito", textTransform: "capitalize" }}
                            onClick={() => setShowSecondPage(false)}
                        >
                            {"<< Previous"}
                        </Button>
                    )}

                    {details.description2 && !showSecondPage && (
                        <Button
                            size="small"
                            sx={{ fontWeight: "bolder", color: 'black', fontFamily: "Nunito", textTransform: "capitalize", marginLeft: "auto" }}
                            onClick={() => setShowSecondPage(true)}
                        >
                            {"Next >>"}
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Box>
    )
}

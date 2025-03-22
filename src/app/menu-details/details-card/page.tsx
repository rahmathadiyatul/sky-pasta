"use client";

import { MenuCard } from "@/app/database/page";
import { Close } from "@mui/icons-material";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

interface CardDetailsProps {
    onClose: () => void;
    menu?: MenuCard;
}

export default function MenuDetailsCard({ onClose, menu }: CardDetailsProps) {
    const [showSecondPage, setShowSecondPage] = useState(false);

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
                    maxWidth: { xs: 350, md: "10vw" },
                    maxHeight: { xs: "75vh", md: "100vh" },
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
                    <Box sx={{ position: "relative" }}>
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
                        <CardMedia
                            component="img"
                            image={menu?.ImageUrl}
                            alt={`${menu?.Name} Sky Pasta`}
                            sx={{ maxHeight: { xs: 250, md: 350 } }}
                        />
                    </Box>
                    <CardContent>
                        <Typography
                            fontSize={30}
                            fontWeight={"bolder"}
                            fontFamily={"Nunito"}
                            textAlign={"center"}
                            color="#c72026"
                            gutterBottom
                            variant="h5"
                        >
                            {!showSecondPage ? menu?.Name : ""}
                        </Typography>
                        <Typography textAlign={"center"} variant="body2" sx={{ color: 'text.secondary' }}>
                            {menu?.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

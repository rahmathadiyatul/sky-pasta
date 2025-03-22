"use client";

import React, { useEffect, useState } from "react";
import { Box, CardMedia, ThemeProvider, CssBaseline, Typography } from "@mui/material";
import Header from "../header/page";
import theme from "@/lib/theme";
import WhatsAppComponent from "@/components/WhatsAppComponent";
const images = [
    "testi-bg.PNG",
    "testi2-bg.jpg",
    "changing1.jpg",
    "changing2.jpg",
    "changing3.jpg",
    "changing4.jpg",
    "changing5.jpg",
    "changing6.jpg",
    "changing7.jpeg",
    "changing8.png",
];

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Header />
                <WhatsAppComponent />
                <Box
                    sx={{
                        height: "100vh",
                        width: "100vw",
                        backgroundImage: `url("/home-bg.JPG")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: { xs: "flex-start", md: "center" },
                        justifyContent: "center",
                        overflow: "hidden",
                        '&::before': {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1,
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                            zIndex: 1,
                        }}
                    />
                    <Box sx={{ pb: { xs: "1rem", md: 0 }, mt: { xs: "15vh", md: 0 }, justifyContent: { xs: "flex-start", md: "space-around" }, alignItems: "center", backgroundColor: "rgba(255,255,255,.7)", width: "100vw", height: { xs: "55vh", md: '50vh' }, flexDirection: { xs: "column", md: "row" } }} display={"flex"}>
                        <CardMedia
                            image="logo.png"
                            sx={{
                                position: "relative",
                                width: { xs: 300, sm: 300, md: 400 },
                                height: { xs: 175, sm: 300, md: 400 },
                                filter: "brightness(1.1) drop-shadow(1px 1px .5px rgba(0, 0, 0, 0.5))",
                                zIndex: 12,
                                userSelect: "none",
                                pointerEvents: "none",
                            }}
                        />
                        <Box
                            className="changing-images"
                            sx={{
                                height: { xs: "30vh", md: "100%" },
                                width: { xs: "90%", md: "50vw" },
                                backgroundImage: `url(${images[currentImage]})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                border: "4px solid rgba(255, 255, 255, 0.5)",
                                transition: "background-image 0.5s ease-in-out, transform 0.5s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.02)",
                                    borderColor: "rgba(255, 255, 255, 0.8)",
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

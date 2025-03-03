"use client";

import React from "react";
import { Box, CardMedia, ThemeProvider, CssBaseline, Typography } from "@mui/material";
import Header from "../header/page";
import theme from "@/lib/theme";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Header />
                <Box
                    sx={{
                        position: "relative",
                        height: "100vh",
                        width: "100vw",
                        backgroundImage: `url("/home-bg.JPG")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
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
                    <Box sx={{ backgroundColor: "rgba(255,255,255,.4)", width: "100vw", height: { xs: "25vh", md: '50vh' } }} display={"flex"} flexDirection={"column"}>
                        <CardMedia
                            image="logo.png"
                            sx={{
                                position: "relative",
                                width: { xs: 300, sm: 300, md: 400 },
                                height: { xs: 300, sm: 300, md: 400 },
                                filter: "brightness(1.1) drop-shadow(1px 1px .5px rgba(0, 0, 0, 0.5))",
                                zIndex: 12,
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

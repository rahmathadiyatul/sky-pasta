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
                        backgroundImage: `url("https://res.cloudinary.com/dxyxg3egs/image/upload/v1722156424/skypasta/37efed64-8dbc-4941-9331-05eff957067f.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2))",
                            zIndex: 1,
                        }}
                    />
                    <Box display={"flex"} flexDirection={"column"}>
                        <CardMedia
                            image="skypasta-logo-red.png"
                            sx={{
                                position: "relative",
                                width: { xs: 300, sm: 300, md: 400 },
                                height: { xs: 300, sm: 300, md: 400 },
                                filter: "brightness(1.1) drop-shadow(4px 4px .5px rgba(0, 0, 0, 0.5))",
                                zIndex: 2,
                            }}
                        />
                        <Typography position={"absolute"} bottom={180} left={400} fontSize={25} color="#c72026" fontWeight={"bolder"} zIndex={11}>where flavor soars</Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

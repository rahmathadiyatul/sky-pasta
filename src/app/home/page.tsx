"use client"

import React, { useEffect, useState } from "react"
import { Box, CardMedia, ThemeProvider, CssBaseline } from "@mui/material"
import Header from "../header/page"
import theme from "@/lib/theme"
import WhatsAppComponent from "@/components/WhatsAppComponent"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
    const [showIntro, setShowIntro] = useState(true)
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited")

        if (hasVisited) {
            setShowIntro(false)
        } else {
            sessionStorage.setItem("hasVisited", "true")

            const moveTimeout = setTimeout(() => {
                setIsExiting(true)
            }, 2000)

            const fadeTimeout = setTimeout(() => {
                setShowIntro(false)
            }, 3500)

            return () => {
                clearTimeout(moveTimeout)
                clearTimeout(fadeTimeout)
            }
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isExiting ? 0 : 1 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            background: "radial-gradient(circle, #c72026, #910017)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 9999,
                        }}
                    >
                        <motion.div
                            animate={
                                isExiting
                                    ? {
                                        top: 20,
                                        left: 20,
                                        scale: 0.6,
                                        position: "absolute",
                                    }
                                    : {
                                        top: "50%",
                                        left: "50%",
                                        x: "-50%",
                                        y: "-50%",
                                        position: "absolute",
                                    }
                            }
                            transition={{ duration: 1 }}
                        >
                            <Box
                                sx={{
                                    width: 175,
                                    height: 175,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <motion.img
                                    src="https://res.cloudinary.com/dxyxg3egs/image/upload/v1724437471/skypasta/skypasta_logo_nobg_myujfv.png"
                                    alt="Logo"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2.5,
                                        ease: "backInOut",
                                    }}
                                    style={{ width: 135, height: 90 }}
                                />
                            </Box>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Box>
                <Header />
                <WhatsAppComponent />
                <Box
                    sx={{
                        height: "100vh",
                        width: "100vw",
                        backgroundImage: `url("/home-bg-2.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: { xs: "flex-start", md: "flex-start" },
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
                            zIndex: 1,
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.1, duration: 0.5, ease: "anticipate" }}
                    >
                        <Box
                            sx={{
                                pt: { xs: 0, md: 0 },
                                pb: { xs: "1rem", md: 0 },
                                mt: { xs: 1, md: 0 },
                                justifyContent: { xs: "flex-start", md: "flex-start" },
                                alignItems: "flex-start",
                                width: "100vw",
                                height: { xs: "35vh", md: 0 },
                                flexDirection: { xs: "column", md: "row" },
                            }}
                            display={"flex"}
                        >
                            <CardMedia
                                image="https://res.cloudinary.com/dxyxg3egs/image/upload/v1724437471/skypasta/skypasta_logo_nobg_myujfv.png"
                                sx={{
                                    position: "relative",
                                    width: { xs: 110, sm: 300, md: 109 },
                                    height: { xs: 65, sm: 300, md: 72 },
                                    filter: "brightness(1.1) drop-shadow(1px 1px .5px rgba(0, 0, 0, 0.5))",
                                    zIndex: 12,
                                    userSelect: "none",
                                    pointerEvents: "none",
                                    marginLeft: { xs: 0, md: 2 },
                                    marginRight: { xs: "auto", md: 0 },
                                }}
                            />
                        </Box>
                    </motion.div>
                </Box>
            </Box>
        </ThemeProvider>
    )
}


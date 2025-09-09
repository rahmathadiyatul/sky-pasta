"use client"
import React from "react"
import { Box } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"

interface LoadingLogoProps {
    showLoadingLogo: boolean
}

export default function LoadingLogo({ showLoadingLogo }: LoadingLogoProps) {
    return (
        <AnimatePresence>
            {showLoadingLogo && (
                <motion.div
                    key="intro"
                    initial={{ opacity: 1 }}
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
                        zIndex: 999,
                    }}
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
                            style={{ width: 135, height: 90 }}
                        />
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

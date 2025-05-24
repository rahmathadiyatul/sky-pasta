"use client"

import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import React, { useState } from "react"

export default function WhatsAppComponent() {
    const [isHovered, setIsHovered] = useState(false)
    const handleWhatsAppClick = () => {
        const phoneNumber = "6285922081818"
        const message = encodeURIComponent("Hi Sky Pasta, saya mau order!")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }

    return (
        <Box
            sx={{
                position: "fixed",
                right: "2%",
                top: { xs: "2%", sm: "2%", md: "auto" },
                bottom: { xs: "auto", sm: "auto", md: "3.25%" },
                zIndex: 15,
                display: "flex",
                alignItems: "center",
                gap: 1,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .05, duration: 0.5, ease: "easeOut" }}
                >
                    <Typography
                        sx={{
                            background: "rgba(255, 255, 255, 0.9)",
                            padding: "6px 10px",
                            borderRadius: "12px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        Need anything?
                    </Typography>
                </motion.div>
            )}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={handleWhatsAppClick}
                style={{ cursor: "pointer" }}
            >
                <Box
                    sx={{
                        height: 40,
                        width: 40,
                        backgroundImage: `url('/whatsapp.png')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                />
            </motion.div>
        </Box>
    )
}

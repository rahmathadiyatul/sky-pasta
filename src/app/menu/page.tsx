"use client"

import React from 'react'
import { Box } from "@mui/material"
import ChooseMenu from "./ChooseMenu/ChooseMenu.js"
import './page.css'
import Header from '@/components/Header'

export default function Menu() {
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                height: "90vh",
                width: "100%",
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
            }}
        >
            <Header />
            <Box sx={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                gap: "5%",
                width: "100%",
            }}>
                <ChooseMenu></ChooseMenu>
            </Box>
        </Box>
    )
}

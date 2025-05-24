"use client"

import React from 'react'
import { Box } from "@mui/material"
import Header from "../header/page"
import ChooseMenu from "./ChooseMenu/ChooseMenu.js"
import './page.css'
import { MenuBook } from '@mui/icons-material'
import { redirect } from 'next/navigation'

export default function Menu() {
    const handleOpenMenu = () => {
        redirect("/menu-details")
    }
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                height: "80vh",
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
            <Box
                sx={{
                    zIndex: 99,
                    position: "fixed",
                    top: { xs: "2%", md: "55%" },
                    left: { xs: "auto", md: "48%" },
                    "& button": {
                        all: "unset",
                        width: "9rem",
                        height: "30px",
                        fontSize: "16px",
                        background: "transparent",
                        border: "none",
                        position: "relative",
                        color: "#f0f0f0",
                        cursor: "pointer",
                        zIndex: 1,
                        padding: "10px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        touchAction: "manipulation",
                        gap: "0.3em",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex: -99999,
                            transition: "all .4s",
                            transform: "translate(0%, 0%)",
                            width: "100%",
                            height: "100%",
                            background: "#28282d",
                            borderRadius: "10px",
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 2,
                            right: 2,
                            zIndex: -99999,
                            transition: "all .4s",
                            transform: "translate(10px, 10px)",
                            width: "18px",
                            height: "18px",
                            background: "#ffffff15",
                            backdropFilter: "blur(5px)",
                            WebkitBackdropFilter: "blur(5px)",
                            borderRadius: "50px",
                        },
                        "&:hover::before": {
                            transform: "translate(5%, 20%)",
                            width: "110%",
                            height: "110%",
                        },
                        "&:hover::after": {
                            borderRadius: "10px",
                            transform: "translate(0, 0)",
                            width: "100%",
                            height: "100%",
                        },
                        "&:active::after": {
                            transition: "0s",
                            transform: "translate(0, 5%)",
                        },
                    },
                }}
                onClick={handleOpenMenu}
            >
                <button role="button">
                    <MenuBook />
                    <p style={{ fontFamily: "Nunito" }}>See Full Menu</p>
                </button>
            </Box>
            <Header></Header>
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

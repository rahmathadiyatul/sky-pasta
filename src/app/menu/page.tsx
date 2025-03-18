"use client";

import React, { useState } from 'react';
import { Box } from "@mui/material";
import Header from "../header/page";
import ChooseMenu from "./ChooseMenu/ChooseMenu.js"
import MenuDetails from "./MenuDetails/MenuDetails.js"
import './page.css';

export default function Menu() {
    const [selectedMenu, setSelectedMenu] = useState('Samba Lado Spaghetti');

    const handleMenuChange = (menu: string) => {
        setSelectedMenu(menu);
    };
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "white",
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
                <ChooseMenu onMenuChange={handleMenuChange}></ChooseMenu>
                <MenuDetails selectedMenu={selectedMenu}></MenuDetails>
            </Box>
        </Box>
    );
}

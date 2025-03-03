"use client";

import React, { useState, useEffect } from 'react';
import { Box, CardMedia, ThemeProvider, CssBaseline, Typography } from "@mui/material";
import Header from "../header/page";
import ChooseMenu from "./ChooseMenu/ChooseMenu.js"
import MenuDetails from "./MenuDetails/MenuDetails.js"
import theme from "@/lib/theme";
import './page.css';

export default function Home() {
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
                height: "100vh",
                width: "100%",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url('/table-bg.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.8,
                    zIndex: -1,
                },
            }}
        >
            <Header></Header>
            <div className='container'>
                <ChooseMenu onMenuChange={handleMenuChange}></ChooseMenu>
                <MenuDetails selectedMenu={selectedMenu}></MenuDetails>
            </div>
        </Box>
    );
}

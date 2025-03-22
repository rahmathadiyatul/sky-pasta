"use client";

import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Header from "../header/page";

const menuCategory = [
    {
        CategoryName: "Creamy Sauced Pasta"
    },
    {
        CategoryName: "Authentic Sauced Pasta"
    },
    {
        CategoryName: "Special Premium"
    },
    {
        CategoryName: "Pizza"
    },
    {
        CategoryName: "Beef & Rice"
    },
    {
        CategoryName: "Crispy Chicken with Rice"
    },
    {
        CategoryName: "Snacks"
    },
    {
        CategoryName: "Beverages"
    },
]

export default function MenuDetails() {
    return (
        <Box
            sx={{
                overflowY: "auto",
            }}
        >
            <Header />
            <Box sx={{ width: "100%", height: "200vh", bgcolor: "white", display: "flex", flexDirection: "row" }}>
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: "30%",
                        textAlign: "right",
                        pt: "5%",
                        position: "fixed",
                        top: 0,
                    }}
                >
                    {menuCategory.map((menu, index) => (
                        <Typography
                            sx={{
                                cursor: "pointer",
                                pr: "1rem",
                                '&:hover': {
                                    color: "white",
                                    backgroundColor: "#c72026",
                                    borderRadius: ".5rem",
                                },
                                '&:focus': {
                                    color: "white",
                                    backgroundColor: "#c72026",
                                    borderRadius: ".5rem",
                                }
                            }}
                            key={index} color="#c72026" lineHeight="3.5rem" fontSize="1.5rem" fontFamily="Nunito" fontWeight="bolder">{menu.CategoryName}</Typography>
                    ))}
                </Box>
                <Box
                    sx={{
                        pt: "5%",
                        ml: "35%",
                        overflowY: "auto",
                    }}
                >
                    <Typography textTransform="uppercase" color="black" lineHeight="3.5rem" fontSize="2rem" fontFamily="Nunito" fontWeight="bolder">Creamy Sauced Pasta</Typography>
                    <Box>
                        <Card sx={{ height: 500 }}>
                            <CardContent sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
                                <CardMedia sx={{ borderRadius: "2rem", backgroundColor: 'beige', height: 200, width: 200 }} image="/recommended/asdasdasd.png" />
                                <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "20%", justifyContent: "flex-start", gap: .25 }}>
                                    <Typography fontSize="1.5rem" fontFamily="Nunito" fontWeight="bolder" color="#c72026">Menu Name</Typography>
                                    <Typography fontSize="1rem" fontFamily="Nunito" fontWeight={600}>Rp 50.000,00</Typography>
                                    <Typography fontFamily="Nunito" textOverflow={"ellipsis"} fontSize={10.5}>Menu Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, sed itaque est fugiat fugit reiciendis amet necessitatibus laborum sequi asperiores eligendi. Ex suscipit animi officia corporis aliquam vitae nemo harum!</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
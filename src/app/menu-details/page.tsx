"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Header from "../header/page";
import { MenuCard, menuCategory } from "../../database/page";
import MenuDetailsCard from "../../components/MenuDetailsCard";
import OrderCard from "../../components/OrderCard";

export default function MenuDetails() {
    const categoryRefs = useRef(menuCategory.map(() => React.createRef<HTMLDivElement>()));
    const [openCard, setOpenCard] = useState<boolean>(false);
    const [openOrderCard, setOpenOrderCard] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("Creamy Sauced Pasta");
    const [selectedMenu, setSelectedMenu] = useState<MenuCard>();

    const handleScrollToCategory = (categoryName: string, index: number) => {
        if (categoryRefs.current[index]?.current) {
            setSelectedCategory(categoryName);
            categoryRefs.current[index].current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const onClickMenuDetails = (menu: MenuCard) => {
        setSelectedMenu(menu);
        setOpenCard(true)
    }

    const onCloseMenuDetails = () => {
        setSelectedMenu(undefined);
        setOpenCard(false);
    }

    const onClickOrder = () => {

    }

    return (
        <Box sx={{ overflowY: "auto" }}>
            {/* {openOrderCard && (
                <OrderCard outlets={outlets} selectedOutlet/>
            )} */}
            {openCard && (
                <MenuDetailsCard onClose={onCloseMenuDetails} menu={selectedMenu} onClickOrder={onClickOrder} />
            )}
            <Header />
            <Box sx={{ width: "100%", minHeight: "200vh", bgcolor: "white", display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        flexDirection: "row",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        padding: ".5rem 1.25rem",
                        gap: 2,
                        position: "sticky",
                        top: 0,
                        backgroundColor: "#c72026",
                        zIndex: 10,
                    }}
                >
                    {(menuCategory ?? []).map((menu, index) => (
                        <Typography
                            onClick={() => handleScrollToCategory(menu.CategoryName, index)}
                            sx={{
                                color: "white",
                                fontWeight: menu.CategoryName === selectedCategory ? "bolder" : 350,
                                cursor: "pointer",
                                fontFamily: "Nunito",
                                borderBottom: menu.CategoryName === selectedCategory ? "2px solid white" : "none"
                            }}
                            key={index}
                        >
                            {menu.CategoryName}
                        </Typography>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: "30%",
                        textAlign: "right",
                        pt: "5%",
                        position: "fixed",
                        top: 0,
                        left: 0,
                    }}
                >
                    {(menuCategory ?? []).map((menu, index) => (
                        <Typography
                            key={index}
                            sx={{
                                color: menu.CategoryName == selectedCategory ? "white" : "#c72026",
                                backgroundColor: menu.CategoryName == selectedCategory ? "#c72026" : "white",
                                borderRadius: ".5rem",
                                cursor: "pointer",
                                mb: .5,
                                pr: "1rem",
                                '&:hover, &:focus': {
                                    color: menu.CategoryName == selectedCategory ? "white" : "#c72026",
                                    backgroundColor: menu.CategoryName == selectedCategory ? "#c72026" : "rgba(0,0,0,.08)",
                                },
                            }}
                            color="#c72026"
                            lineHeight="3.5rem"
                            fontSize="1.5rem"
                            fontFamily="Nunito"
                            fontWeight="bolder"
                            onClick={() => handleScrollToCategory(menu.CategoryName, index)}
                        >
                            {menu.CategoryName}
                        </Typography>
                    ))}
                </Box>
                <Box sx={{ mb: "10%", ml: { xs: "5%", md: "35%" }, width: { xs: "90%", md: "60%" } }}>
                    {(menuCategory ?? []).map((category, index) => (
                        <Box key={index} ref={categoryRefs.current[index]} sx={{ mb: 4, scrollMarginTop: { xs: "7vh", md: 0 } }}>
                            <Typography
                                textTransform="uppercase"
                                color="black"
                                fontFamily="Nunito"
                                fontWeight="bolder"
                                sx={{
                                    lineHeight: { xs: "2rem", md: "3.5rem" },
                                    fontSize: { xs: "1.5rem", md: "2rem" }
                                }}
                            >
                                {category.CategoryName}
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                                {(category.MenuList ?? []).map((menu: MenuCard, idx: number) => (
                                    <Card onClick={() => onClickMenuDetails(menu)} key={idx} sx={{ width: { xs: "100%", md: "48%" } }}>
                                        <CardContent sx={{ display: "flex", flexDirection: "row", gap: 1.5, alignItems: "center" }}>
                                            <CardMedia
                                                sx={{ padding: "1rem", borderRadius: "2rem", backgroundColor: "beige", height: { xs: 100, md: 115 }, width: { xs: 100, md: 125 }, userSelect: "none", pointerEvents: "none" }}
                                                image={menu.ImageUrl}
                                            />
                                            <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "60%", justifyContent: "flex-start", gap: 0.25 }}>
                                                <Typography sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }} lineHeight="1.25rem" fontFamily="Nunito" fontWeight="bolder" color="#c72026">
                                                    {menu.Name}
                                                </Typography>
                                                <Typography sx={{ fontSize: { xs: ".8rem", md: "1rem" } }} fontFamily="Nunito" fontWeight={600}>
                                                    Rp {menu.Price.toLocaleString("id-ID")},00
                                                </Typography>
                                                <Typography fontFamily="Nunito" fontSize={10.5} sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                                                    {menu.Description}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
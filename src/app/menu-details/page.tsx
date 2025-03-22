"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Header from "../header/page";
import { MenuCard, menuCategory } from "../database/page";
import MenuDetailsCard from "./details-card/page";

export default function MenuDetails() {
    const categoryRefs = useRef(menuCategory.map(() => React.createRef<HTMLDivElement>()));
    const [openCard, setOpenCard] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
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

    return (
        <Box sx={{ overflowY: "auto" }}>
            {
                openCard && (
                    <MenuDetailsCard onClose={onCloseMenuDetails} menu={selectedMenu} />
                )
            }
            <Header />
            <Box sx={{ width: "100%", minHeight: "200vh", bgcolor: "white", display: "flex", flexDirection: "row" }}>
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
                                    color: "white",
                                    backgroundColor: "#c72026",
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
                        <Box key={index} ref={categoryRefs.current[index]} sx={{ mb: 4 }}>
                            <Typography
                                textTransform="uppercase"
                                color="black"
                                lineHeight="3.5rem"
                                fontSize="2rem"
                                fontFamily="Nunito"
                                fontWeight="bolder"
                            >
                                {category.CategoryName}
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                                {(category.MenuList ?? []).map((menu: MenuCard, idx: number) => (
                                    <Card onClick={() => onClickMenuDetails(menu)} key={idx} sx={{ width: "48%" }}>
                                        <CardContent sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
                                            <CardMedia
                                                sx={{ padding: "1rem", borderRadius: "2rem", backgroundColor: "beige", height: 125, width: 125 }}
                                                image={menu.ImageUrl}
                                            />
                                            <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "60%", justifyContent: "flex-start", gap: 0.25 }}>
                                                <Typography lineHeight={"1.25rem"} fontSize="1.25rem" fontFamily="Nunito" fontWeight="bolder" color="#c72026">
                                                    {menu.Name}
                                                </Typography>
                                                <Typography fontSize="1rem" fontFamily="Nunito" fontWeight={600}>
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
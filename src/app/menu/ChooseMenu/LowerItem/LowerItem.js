import React from 'react'
import { Box, Button, CardMedia, Typography } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import MenuDetails from '../../MenuDetails/MenuDetails'

const LowerItem = ({ handleHighlightLeft, handleHighlightRight, highlightIndex, gradientIndex, selectedMenu, totalImages, visibleCount, startIndex, imageUrls, handleOpenCard, handleMovesLeft, handleMovesRight, slide }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <MenuDetails gradientIndex={gradientIndex} selectedMenu={selectedMenu} slide={slide}></MenuDetails>
            <Box
                sx={{
                    ml: 52,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    padding: "0.5em",
                    mt: "2rem",
                    mb: "1rem",
                    width: "6em",
                    gap: "2rem",
                    transition: "background-color 0.3s, border-radius 0.3s",
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        borderRadius: "10%",
                    },
                }}
            >
                <Button
                    sx={{
                        display: "flex",
                        zIndex: 20,
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        minWidth: "unset",
                        bgcolor: "#fff",
                        boxShadow: 'none',
                        color: "#c72026",
                        mb: '4rem'
                    }}
                    variant="contained"
                    onClick={handleHighlightLeft}
                >
                    <ChevronLeft fontSize='large' />
                </Button>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: { xs: .5, md: 2 } }}>
                    {Array.from({ length: visibleCount }).map((_, i) => {
                        const index = (startIndex + i) % totalImages
                        const isSelected = i === highlightIndex
                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: { xs: i !== 2 ? "none" : "flex", md: "flex" },
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 1,
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease, background-color 0.3s ease",
                                    transform: isSelected ? "scale(1.1) translateY(-3px)" : "scale(1)",
                                    bgcolor: isSelected ? "rgba(0, 0, 0, 0.075)" : "white",
                                    borderRadius: "10%",
                                    width: "6rem",
                                    padding: '.5rem .5rem',
                                    boxShadow: isSelected ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none",
                                    zIndex: 99
                                }}
                                onClick={
                                    i === highlightIndex
                                        ? handleOpenCard
                                        : i < highlightIndex
                                            ? handleHighlightLeft
                                            : handleHighlightRight
                                }
                            >
                                <CardMedia
                                    sx={{
                                        width: "5em",
                                        height: "5em",
                                        borderRadius: "10%",
                                        bgcolor: "rgba(255,255,255,.5)",
                                        padding: "2rem",
                                        userSelect: "none",
                                        pointerEvents: "none",
                                    }}
                                    image={imageUrls[index].imgUrl}
                                    alt="Lower Item"
                                />
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: ".7em",
                                        fontWeight: 'bolder',
                                        textAlign: "center",
                                        color: "#c72026",
                                        lineHeight: 1.2,
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        height: "2.4em",
                                    }}
                                >
                                    {imageUrls[index]?.menuName}
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
                <Button
                    sx={{
                        display: "flex",
                        zIndex: 20,
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        minWidth: "unset",
                        bgcolor: "#fff",
                        boxShadow: 'none',
                        color: "#c72026",
                        mb: '4rem'
                    }}
                    variant="contained"
                    onClick={handleHighlightRight}
                >
                    <ChevronRight fontSize='large' />
                </Button>
            </Box>
        </Box>
    )
}

export default LowerItem

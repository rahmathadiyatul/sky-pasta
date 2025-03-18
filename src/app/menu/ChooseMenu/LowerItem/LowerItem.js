import React from 'react';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import MenuDetails from '../../MenuDetails/MenuDetails';

const LowerItem = ({ selectedMenu, totalImages, visibleCount, startIndex, imageUrls, onLowerMenuClick, handleMovesLeft, handleMovesRight }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
                padding: "0.5em",
                mt: "2rem",
                width: "10em",
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
                    display: { xs: "none", md: "flex" },
                    zIndex: 20,
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    minWidth: "unset",
                    bgcolor: "#c72026",
                    backdropFilter: "blur(5px)",
                    color: "white",
                    "&:hover": {
                        bgcolor: "#a92026",
                    },
                }}
                variant="contained"
                onClick={handleMovesLeft}
            >
                <ChevronLeft />
            </Button>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 2 }}>
                {Array.from({ length: visibleCount }).map((_, i) => {
                    const index = (startIndex + i) % totalImages;
                    const isSelected = i === 1;

                    return (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                                transition: "transform 0.3s ease-in-out",
                                transform: isSelected ? "scale(1.1)" : "scale(1)",
                                bgcolor: isSelected ? "#c72026" : "white",
                                borderRadius: "10%",
                                width: isSelected ? "7.5rem" : "6rem",
                                padding: isSelected ? ".5rem .25rem" : "0",
                                boxShadow: isSelected ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : "none",
                            }}
                            onClick={i === 0 ? handleMovesLeft : i === visibleCount - 1 ? handleMovesRight : undefined}
                        >
                            <CardMedia
                                sx={{
                                    width: isSelected ? "6em" : "5em",
                                    height: isSelected ? "6em" : "5em",
                                    borderRadius: "10%",
                                    bgcolor: "rgba(255,255,255,.5)",
                                    padding: "2rem"
                                }}
                                image={imageUrls[index].imgUrl}
                                alt="Lower Item"
                            />
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: isSelected ? ".8em" : ".7em",
                                    fontWeight: isSelected ? "bolder" : 550,
                                    textAlign: "center",
                                    color: isSelected ? "white" : "black",
                                }}
                            >
                                {imageUrls[index].menuName}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
            <Button
                sx={{
                    display: { xs: "none", md: "flex" },
                    zIndex: 20,
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    minWidth: "unset",
                    bgcolor: "#c72026",
                    backdropFilter: "blur(5px)",
                    color: "white",
                    "&:hover": {
                        bgcolor: "#a92026",
                    },
                }}
                variant="contained"
                onClick={handleMovesRight}
            >
                <ChevronRight />
            </Button>
            <MenuDetails selectedMenu={selectedMenu}></MenuDetails>
        </Box>
    );
};

export default LowerItem;

import React, { useState } from 'react';
import { MenuBook } from '@mui/icons-material';
import '../MenuItem/MenuItem.css';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import '@fontsource/roboto';

const MenuItem = ({ imageUrls, positions }) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "70%",
            gap: "2em",
        }}>
            <Box sx={{ position: "relative", width: "23vw", height: "23vw" }}>
                {imageUrls.map((menuData, index) => (
                    <CardMedia
                        key={index}
                        sx={{
                            position: "absolute",
                            width: { xs: 250, md: 300 },
                            transform: positions[index],
                            zIndex: 1,
                            transition: "transform 0.3s ease-in-out",
                            filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.5))",
                            userSelect: "none",
                            pointerEvents: "none",
                        }}
                        component="img"
                        image={menuData.imgUrl}
                        alt={menuData.menuName}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default MenuItem;

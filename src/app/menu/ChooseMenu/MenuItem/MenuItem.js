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
                        }}
                        component="img"
                        image={menuData.imgUrl}
                        alt={menuData.menuName}
                    />
                ))}
                {/* <Box className={`div-image ${slide ? 'slide-left' : ''}`}>
                <CardMedia
                    component="img"
                    sx={{ width: 500, backgroundColor: "black" }}
                    image="/recommended/sky1.png"
                    alt='Menu Item'
                ></CardMedia>
                                </Box>
                <Box className={`div-image ${slide ? 'slide-center' : 'start-position2'}`}>
                    <CardMedia className='img-2' image='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157378/skypasta/1_jl9jtt.png' alt='Menu Item'></CardMedia>
                </Box> */}
            </Box>
            {/* <Box >
                <Box className='menu-name-1'>
                    <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant="h1" sx={{ fontWeight: 'bolder', fontSize: '1em', backgroundColor: "rgba(0,0,0,.8)", padding: ".5rem 1rem", borderRadius: "3rem", color: "white" }} gutterBottom>Most Ordered Menu</Typography>
                    <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant='h2' sx={{ fontWeight: 'lighter', fontSize: '3.3em' }}>SAMBA LADO</Typography>
                    <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant='h1' sx={{ fontWeight: 'bolder', fontSize: '4em' }}>SPAGHETTI</Typography>
                </Box>
                <Box className='menu-name-2'>
                    <Typography className={slide ? 'typography-slide-in' : 'typography-slide-out'} variant="h1" sx={{ fontWeight: 'bolder', fontSize: '1em', backgroundColor: "rgba(0,0,0,.8)", padding: ".5rem 1rem", borderRadius: "3rem", color: "white" }} gutterBottom>Best Rated Menu</Typography>
                    <Typography className={slide ? 'typography-slide-in' : 'typography-slide-out'} variant='h2' sx={{ fontWeight: 'lighter', fontSize: '3.3em' }}>PASTA</Typography>
                    <Typography className={slide ? 'typography-slide-in' : 'typography-slide-out'} variant='h1' sx={{ fontWeight: 'bolder', fontSize: '4em' }}>APADAH TAU</Typography>
                    <button role="button">
                        <MenuBook />
                        <p>Order Menu</p>
                    </button>
                </Box>
            </Box> */}
        </Box>
    );
};

export default MenuItem;

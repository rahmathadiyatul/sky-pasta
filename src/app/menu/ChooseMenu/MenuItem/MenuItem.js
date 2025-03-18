import React, { useState } from 'react';
import { MenuBook } from '@mui/icons-material';
import '../MenuItem/MenuItem.css';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import '@fontsource/roboto';

const imageUrls = [
    "/recommended/sky1.png",
    "/recommended/sky2.png",
    "/recommended/sky3.png",
    "/recommended/sky4.png",
    "/recommended/sky5.png",
    "/recommended/sky6.png",
    "/recommended/sky7.png",
    "/recommended/sky8.png",
    "/recommended/sky9.png"
];

const initialPositions = [
    "translate(-400%, -170%)",
    "translate(-310%, -120%)",
    "translate(-210%, -80%)",
    "translate(-110%, -40%)",
    "translate(0%, 0%)",
    "translate(110%, -40%)",
    "translate(210%, -80%)",
    "translate(310%, -120%)",
    "translate(400%, -170%)"
];

const MenuItem = () => {
    const [positions, setPositions] = useState(initialPositions);

    const handleMovesLeft = () => {
        setPositions((prev) => {
            const shifted = [...prev];
            const first = shifted.shift();
            shifted.push(first);
            return shifted;
        });
    };

    const handleMovesRight = () => {
        setPositions((prev) => {
            const shifted = [...prev];
            const last = shifted.pop();
            shifted.unshift(last);
            return shifted;
        });
    };

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
                {imageUrls.map((imgUrl, index) => (
                    <CardMedia
                        key={index}
                        sx={{
                            position: "absolute",
                            width: 300,
                            transform: positions[index],
                            zIndex: 1,
                            transition: "transform 0.3s ease-in-out",
                            filter: "drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.5))",
                        }}
                        component="img"
                        image={imgUrl}
                        alt={`Menu Item ${index}`}
                    />
                ))}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 50 }}>
                    <Button sx={{ borderRadius: 3 }} variant="contained" onClick={handleMovesLeft}>
                        Left
                    </Button>
                    <Button sx={{ borderRadius: 3 }} variant="contained" onClick={handleMovesRight}>
                        Right
                    </Button>
                </Box>
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

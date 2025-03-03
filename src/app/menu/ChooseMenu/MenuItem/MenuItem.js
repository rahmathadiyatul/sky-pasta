import React from 'react';
import { MenuBook } from '@mui/icons-material';
import '../MenuItem/MenuItem.css';
import { Card, Typography } from '@mui/material';
import '@fontsource/roboto';

const MenuItem = ({ slide }) => {
    return (
        <div className='menu-item-container'>
            <div className='image-container'>
                <div className={`div-image ${slide ? 'slide-left' : ''}`}>
                    <img src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157379/skypasta/2_supf1m.png' alt='Menu Item'></img>
                </div>
                <div className={`div-image ${slide ? 'slide-center' : 'start-position2'}`}>
                    <img className='img-2' src='https://res.cloudinary.com/dxyxg3egs/image/upload/v1722157378/skypasta/1_jl9jtt.png' alt='Menu Item'></img>
                </div>
            </div>
            <div >
                <div className='menu-name-1'>
                    <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant="h1" sx={{ fontWeight: 'bolder', fontSize: '1em', backgroundColor: "rgba(0,0,0,.8)", padding: ".5rem 1rem", borderRadius: "3rem", color: "white" }} gutterBottom>Most Ordered Menu</Typography>
                    <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant='h2' sx={{ fontWeight: 'lighter', fontSize: '3.3em' }}>SAMBA LADO</Typography>
                    <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant='h1' sx={{ fontWeight: 'bolder', fontSize: '4em' }}>SPAGHETTI</Typography>
                </div>
                <div className='menu-name-2'>
                    <Typography className={slide ? 'typography-slide-in' : 'typography-slide-out'} variant="h1" sx={{ fontWeight: 'bolder', fontSize: '1em', backgroundColor: "rgba(0,0,0,.8)", padding: ".5rem 1rem", borderRadius: "3rem", color: "white" }} gutterBottom>Best Rated Menu</Typography>
                    <Typography className={slide ? 'typography-slide-in' : 'typography-slide-out'} variant='h2' sx={{ fontWeight: 'lighter', fontSize: '3.3em' }}>PASTA</Typography>
                    <Typography className={slide ? 'typography-slide-in' : 'typography-slide-out'} variant='h1' sx={{ fontWeight: 'bolder', fontSize: '4em' }}>APADAH TAU</Typography>
                    <button role="button">
                        <MenuBook />
                        <p>Order Menu</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;

"use client"

import React from "react";
import {
    Box,
    CardMedia,
    Typography,
} from "@mui/material";
import { styled } from '@mui/system';
export default function Header() {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                position: "absolute",
                zIndex: 3,
                bottom: 0,
                width: "100%",
                background: "linear-gradient(3150deg, rgba(255, 25, 25, 0.5), rgba(200, 25, 25, 1))"
            }}
        >
            <Box>
                <CardMedia
                    sx={{ width: 90, height: 60, margin: 1, mr: { xs: "auto", sm: 13, md: 20 } }}
                    image='https://res.cloudinary.com/dxyxg3egs/image/upload/v1724437471/skypasta/skypasta_logo_nobg_myujfv.png'
                    title='sky-pasta-logo'
                ></CardMedia>
            </Box>
            <Box sx={{ width: { xs: 1000, sm: 300, md: 600 }, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <StyledLink >
                    <Typography sx={{ fontWeight: 300, fontSize: { xs: 12, sm: 13, md: 18 } }}>Menu</Typography>
                </StyledLink >
                <StyledLink >
                    <Typography sx={{ fontWeight: 300, fontSize: { xs: 12, sm: 13, md: 18 } }}>About Sky Pasta</Typography>
                </StyledLink >
                <StyledLink >
                    <Typography sx={{ fontWeight: 300, fontSize: { xs: 12, sm: 13, md: 18 } }}>Our Outlets</Typography>
                </StyledLink >
                <StyledLink >
                    <Typography sx={{ fontWeight: 300, fontSize: { xs: 12, sm: 13, md: 18 } }}>Contact Us</Typography>
                </StyledLink >
            </Box>
        </Box>
    )
}

const StyledLink = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    color: 'white',
    position: 'relative',
    transition: 'color 0.3s ease, padding-bottom 0.3s ease',
    '&:hover': {
        color: '#f7dfaf',
        textShadow: '0 0 50px rgba(0, 0, 0, 0.1)',
        paddingBottom: '.5%',
        cursor: "pointer"
    },
}));
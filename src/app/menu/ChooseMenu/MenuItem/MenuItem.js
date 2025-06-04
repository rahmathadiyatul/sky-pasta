import React from 'react'
import { CardMedia, Box } from '@mui/material'
import '../MenuItem/MenuItem.css'

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
            {imageUrls.map((menuData, index) => (
                <CardMedia
                    key={index}
                    component="img"
                    image={menuData?.imgUrl}
                    alt={menuData?.menuName}
                    sx={{
                        position: "absolute",
                        width: { xs: 350, md: 400 },
                        transform: positions[index],
                        zIndex: 1,
                        transition: "transform 0.6s ease-in-out",
                        filter: "drop-shadow(-25px -10px 40px rgba(0, 0, 0, 0.3))",
                        userSelect: "none",
                        pointerEvents: "none",
                    }}
                />
            ))}
        </Box>
    )
}

export default MenuItem

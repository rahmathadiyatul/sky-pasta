import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import './MenuDetails.css'
import { ThumbUp } from '@mui/icons-material'

const MenuDetails = ({ selectedMenu, slide }) => {
    const words = selectedMenu.menuName.split(' ')
    const menuName1 = words.length > 2 ? words.slice(0, 2).join(' ') : words[0]
    const menuName2 = words.length > 2 ? words.slice(2).join(' ') : words[1]
    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "1em",
                zIndex: 10,
                height: "22em"
            }}
        >
            <Box sx={{ minWidth: '17rem' }}>
                <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant="h1" sx={{ fontWeight: 'bolder', fontSize: '1em' }} gutterBottom>Most Ordered Menu</Typography>
                <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant='h2' sx={{ fontWeight: 'lighter', fontSize: '2em' }}>{menuName1}</Typography>
                <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant='h1' sx={{ fontWeight: 'bolder', fontSize: '3em' }}>{menuName2}</Typography>
            </Box>
            <Card sx={{ paddingLeft: "1rem", borderRadius: '20px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)', backgroundColor: 'rgba(250,250,250,0.5)' }}>
                <Box
                    sx={{
                        position: "relative",
                        left: "1em",
                        top: "2em",
                        width: "5em",
                        height: "5em",
                        borderRadius: "35%",
                        backgroundColor: "rgba(255, 10, 194, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 10px rgba(255, 10, 194, 0.3)",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                            backgroundColor: "rgba(255, 10, 194, 0.7)",
                            transform: "scale(1.1)",
                        },
                    }}
                >
                    <ThumbUp sx={{ fontSize: 40, color: "white", filter: "drop-shadow(2px 2px 5px rgba(255, 255, 255, 0.5))" }} />
                </Box>
                <CardHeader
                    sx={{ position: 'relative', top: '2em', textAlign: 'left', mb: ".5em", color: "#c72026" }}
                    titleTypographyProps={{ fontSize: '1.2em', fontWeight: 'bolder' }}
                    title={selectedMenu?.menuName}
                />
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ textAlign: 'left', minWidth: '16em', fontWeight: 'bold' }} variant="body2" color="text.secondary">
                        {selectedMenu?.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default MenuDetails

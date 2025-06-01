import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import './MenuDetails.css'
import { MenuBook, ThumbUp } from '@mui/icons-material'
import { redirect } from 'next/navigation'
import { gradients2 } from '@/database/page'

const MenuDetails = ({ gradientIndex, selectedMenu, slide }) => {
    const words = selectedMenu.menuName.split(' ')
    const menuName1 = words.length > 2 ? words.slice(0, 2).join(' ') : words[0]
    const menuName2 = words.length > 2 ? words.slice(2).join(' ') : words[1]
    const handleOpenMenu = () => {
        redirect("/menu-details")
    }

    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                top: -280,
                left: '35vw',
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "1em",
                zIndex: 10,
                position: "absolute",
            }}
        >
            <Box sx={{ minWidth: '27rem' }}>
                <Typography className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant="h1" sx={{ fontFamily: 'Nunito', color: '#c72026', fontWeight: 'bolder', fontSize: '1em', textAlign: 'left' }} gutterBottom>Most Ordered Menu</Typography>
                <Typography className={slide ? 'typography-slide-out-2' : 'typography-slide-in-2'} variant='h2' sx={{ fontFamily: 'Nunito', color: '#c72026', fontWeight: 'lighter', fontSize: '4em', textAlign: 'left' }}>{menuName1}</Typography>
                <Typography textTransform={'uppercase'} className={slide ? 'typography-slide-out' : 'typography-slide-in'} variant='h1' sx={{ fontFamily: 'Nunito', color: '#c72026', fontWeight: 'bolder', fontSize: '4em', textAlign: 'left' }}>{menuName2}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1em",
                }}>
                <Card sx={{
                    paddingLeft: "1rem",
                    borderRadius: '20px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'rgba(0,0,0,.025)'
                }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            left: "1em",
                            top: "2em",
                            width: "5em",
                            height: "5em",
                            borderRadius: "35%",
                            background: gradients2[gradientIndex],
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            backdropFilter: "blur(10px)",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                background: gradients2[gradientIndex],
                                transform: "scale(1.1)",
                            },
                        }}
                    >
                        <ThumbUp sx={{ fontSize: 40, color: "white", filter: "drop-shadow(2px 2px 5px rgba(255, 255, 255, 0.5))" }} />
                    </Box>
                    <CardHeader
                        className={slide ? 'typography-fade-out' : 'typography-fade-in'}
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
                        <Typography
                            className={slide ? 'typography-fade-out-left' : 'typography-fade-in-left'}
                            sx={{ textAlign: 'left', minWidth: '16em', fontWeight: 'bold' }} variant="body2" color="text.secondary">
                            {selectedMenu?.description}
                        </Typography>
                    </CardContent>
                </Card>
                <Box
                    sx={{
                        display: "flex",
                        zIndex: 99,
                        width: "100%",
                        "& button": {
                            all: "unset",
                            height: "30px",
                            width: "100%",
                            fontSize: "16px",
                            background: "transparent",
                            border: "none",
                            position: "relative",
                            color: "#f0f0f0",
                            cursor: "pointer",
                            zIndex: 1,
                            padding: "10px 20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            whiteSpace: "nowrap",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            touchAction: "manipulation",
                            gap: "0.3em",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                zIndex: -99999,
                                transition: "all .4s",
                                transform: "translate(0%, 0%)",
                                width: "100%",
                                height: "100%",
                                background: "rgba(0,0,0,.1)",
                                borderRadius: "10px",
                            },
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 2,
                                right: 2,
                                zIndex: -99999,
                                transition: "all .4s",
                                transform: "translate(10px, 10px)",
                                width: "18px",
                                height: "18px",
                                background: "#aaaaaa85",
                                backdropFilter: "blur(5px)",
                                WebkitBackdropFilter: "blur(5px)",
                                borderRadius: "50px",
                            },
                            "&:hover::before": {
                                transform: "translate(5%, 20%)",
                                width: "110%",
                                height: "110%",
                            },
                            "&:hover::after": {
                                borderRadius: "10px",
                                transform: "translate(0, 0)",
                                width: "100%",
                                height: "100%",
                            },
                            "&:active::after": {
                                transition: "0s",
                                transform: "translate(0, 5%)",
                            },
                        },
                    }}
                    onClick={handleOpenMenu}
                >
                    <button role="button">
                        <MenuBook sx={{ color: '#c72026' }} />
                        <p style={{ fontFamily: "Nunito", fontWeight: 'bolder', color: '#c72026' }}>See Full Menu</p>
                    </button>
                </Box>
            </Box>
        </Box>
    )
}

export default MenuDetails

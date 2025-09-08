"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
    Box,
    Button,
    CardMedia,
    List,
    ListItem,
    ListItemText,
    Modal,
    Typography,
} from "@mui/material"
import { styled } from '@mui/system'
import { redirect } from "next/navigation"
import { outlets } from "@/database/page"

export default function Header() {
    const pathname = usePathname()
    const [openOutletList, setOpenOutletList] = useState<boolean>(false)
    const [openOrderList, setOpenOrderList] = useState<boolean>(false)
    const [selectedHeader, setSelectedHeader] = useState<string>("")
    const [selectedOutlet, setSelectedOutlet] = useState<string>("")

    const onInit = () => {
        const header = pathname.replace("/", "")
        setSelectedHeader(header)
    }

    useEffect(() => {
        onInit()
    }, [pathname])

    const onClickHeader = (route: string) => {
        setSelectedHeader(route)
        redirect("/" + route)
    }

    const handleOnClickOrder = () => {
        setOpenOutletList(true)
    }

    const handleCloseModal = () => {
        setOpenOutletList(false)
    }

    const handleBack = () => {
        setOpenOutletList(true)
        setOpenOrderList(false)
    }

    const handleOpenOnlineFoodList = (outlet: any) => {
        setOpenOrderList(true)
    }

    const handleOpenOrderList = (outlet: any) => {
        handleCloseModal()
        if (outlet?.name?.toLowerCase().includes("big")) {
            handleWhatsAppClick()
        } else {
            handleOpenOnlineFoodList(outlet)
            setSelectedOutlet(outlet?.name)
        }
    }

    const handleOrderByMerchant = (url: string) => {
        if (url != '') {
            window.open(url, "_blank")
        }
    }

    const handleWhatsAppClick = () => {
        const phoneNumber = "6285922081818"
        const message = encodeURIComponent("Hi Sky Pasta, saya mau order!")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    position: "fixed",
                    zIndex: 3,
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    background: "linear-gradient(3150deg, rgba(255, 25, 25, 0.7), rgba(200, 25, 25, 1))",
                    padding: "2px 0",
                }}
            >
                <Box sx={{ cursor: "pointer" }} onClick={() => onClickHeader("home")}>
                    <CardMedia
                        sx={{ userSelect: "none", pointerEvents: "none", width: 80, height: 52, margin: 1, mr: { xs: "auto", sm: 13, md: 20 } }}
                        image='https://res.cloudinary.com/dxyxg3egs/image/upload/v1724437471/skypasta/skypasta_logo_nobg_myujfv.png'
                        title='sky-pasta-logo'
                    />
                </Box>
                <Box sx={{ width: { xs: 1000, sm: 300, md: 600 }, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <StyledLink onClick={() => onClickHeader("about")}>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",
                                color: "white",
                                textShadow: selectedHeader == "about" ? '0 0 50px rgba(0, 0, 0, 0.1)' : "none",
                                paddingBottom: selectedHeader == "about" ? '.5%' : 0,
                                cursor: "pointer",
                                fontWeight: "bolder",
                                fontSize: { xs: 12, sm: 13, md: 15 }
                            }}>About</Typography>
                    </StyledLink >
                    <StyledLink onClick={() => onClickHeader("menu")} >
                        <Typography
                            sx={{
                                fontFamily: "Nunito",
                                color: "white",
                                textShadow: selectedHeader == "menu" ? '0 0 50px rgba(0, 0, 0, 0.1)' : "none",
                                paddingBottom: selectedHeader == "menu" ? '.5%' : 0,
                                cursor: "pointer",
                                fontWeight: "bolder",
                                fontSize: { xs: 12, sm: 13, md: 15 }
                            }}>Menu</Typography>
                    </StyledLink >
                    <StyledLink onClick={() => onClickHeader("outlets")}>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",
                                color: "white",
                                textShadow: selectedHeader == "outlets" ? '0 0 50px rgba(0, 0, 0, 0.1)' : "none",
                                paddingBottom: selectedHeader == "outlets" ? '.5%' : 0,
                                cursor: "pointer",
                                fontWeight: "bolder",
                                fontSize: { xs: 12, sm: 13, md: 15 }
                            }}>Outlets</Typography>
                    </StyledLink >
                    <StyledLink onClick={() => onClickHeader("gallery")}>
                        <Typography
                            sx={{
                                fontFamily: "Nunito",
                                color: "white",
                                textShadow: selectedHeader == "outlets" ? '0 0 50px rgba(0, 0, 0, 0.1)' : "none",
                                paddingBottom: selectedHeader == "outlets" ? '.5%' : 0,
                                cursor: "pointer",
                                fontWeight: "bolder",
                                fontSize: { xs: 12, sm: 13, md: 15 }
                            }}>Gallery</Typography>
                    </StyledLink >
                    <Button onClick={handleOnClickOrder} variant="contained" sx={{ fontFamily: "Nunito", backgroundColor: "#c72026", borderRadius: "2rem", px: "1rem", border: "3px solid white" }}>
                        <Typography color="white" textTransform={"capitalize"} sx={{ fontWeight: 550, fontSize: { xs: 12, sm: 13, md: 15 } }}>Order Now</Typography>
                    </Button >
                </Box>
            </Box>
            <Modal open={openOutletList} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "white",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        minWidth: 320,
                        maxWidth: 500,
                        textAlign: "center",
                        animation: "fadeIn 0.3s ease-in-out",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            fontWeight: "bold",
                            color: "#c72026",
                            textTransform: "uppercase",
                            letterSpacing: 1.2
                        }}
                    >
                        Choose an Outlet
                    </Typography>

                    <List sx={{ overflowY: "auto" }}>
                        {outlets.map((outlet, index) => (
                            <ListItem
                                key={index}
                                component="button"
                                onClick={() => handleOpenOrderList(outlet)}
                                sx={{
                                    cursor: "pointer",
                                    paddingY: 0,
                                    textAlign: "left",
                                    bgcolor: "rgba(255,255,255,.8)",
                                    width: "100%",
                                    color: "#c72026",
                                    borderRadius: 10,
                                    border: "2px solid #c72026",
                                    fontWeight: "bolder",
                                    mb: 1,
                                    transition: "0.3s",
                                    "&:hover": {
                                        bgcolor: "#a6171d",
                                        color: "white",
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={outlet.name}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        onClick={handleCloseModal}
                        sx={{
                            mt: 3,
                            bgcolor: "black",
                            color: "white",
                            px: 3,
                            py: 1,
                            borderRadius: 5,
                            transition: "0.3s",
                            "&:hover": { bgcolor: "#333" }
                        }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Modal>
            <Modal open={openOrderList} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundImage: "linear-gradient(to left,rgb(139, 50, 53), #c72026)",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        minWidth: 320,
                        maxWidth: { xs: 100, md: 500 },
                        textAlign: "center",
                        animation: "fadeIn 0.3s ease-in-out",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            textTransform: "uppercase",
                            letterSpacing: 1.2
                        }}
                    >
                        {selectedOutlet}
                    </Typography>
                    <Typography
                        sx={{
                            mb: 2,
                            color: "white",
                            textTransform: "capitalize",
                            letterSpacing: 1
                        }}
                    >
                        Pick your merchant
                    </Typography>

                    <List sx={{ overflowY: "auto" }}>
                        {outlets.find(x => x.name == selectedOutlet)?.onlineFoodUrl.map((merchant, index) => (
                            <ListItem
                                key={index}
                                component="button"
                                onClick={() => handleOrderByMerchant(merchant?.merchantUrl)}
                                sx={{
                                    minHeight: 50,
                                    paddingX: 5,
                                    cursor: "pointer",
                                    paddingY: 5,
                                    textAlign: "center",
                                    width: "100%",
                                    bgcolor: "rgba(255,255,255,.6)",
                                    color: "#c72026",
                                    borderRadius: 5,
                                    border: "none",
                                    fontWeight: "bolder",
                                    mb: 1,
                                    transition: "0.3s",
                                    backgroundImage: `url(${index == 0 ? "gofood.png" : index == 1 ? "grabfood.png" : "shopeefood.png"})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,.9)",
                                        color: "white",
                                    },
                                }}
                            >
                            </ListItem>
                        ))}
                    </List>

                    <Button
                        onClick={handleBack}
                        sx={{
                            mt: 3,
                            bgcolor: "black",
                            color: "white",
                            px: 3,
                            py: 1,
                            borderRadius: 5,
                            transition: "0.3s",
                            minWidth: "50%",
                            "&:hover": { bgcolor: "#333" }
                        }}
                    >
                        Back
                    </Button>
                </Box>
            </Modal>
        </>
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
        paddingBottom: '1%',
        cursor: "pointer"
    },
}))
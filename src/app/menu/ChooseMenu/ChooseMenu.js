import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem/MenuItem'
import LowerItem from './LowerItem/LowerItem'
import { Box, useMediaQuery } from '@mui/material'
import MenuDetailsCard from '@/components/MenuDetailsCard'
import OrderCard from '@/components/OrderCard'
import { imageUrls, gradients, outlets } from '@/database/page'
import { redirect } from 'next/navigation'
import { MenuBook } from '@mui/icons-material'

const initialPositions = [
    "translate(-350%, -100%)",
    "translate(-350%, -100%)",
    "translate(-118%, 0%)",
    "translate(180%, -250%)",
    "translate(180%, -250%)",
    "translate(180%, -250%)",
    "translate(180%, -250%)",
    "translate(180%, -250%)",
    "translate(180%, -250%)"
]

const ChooseMenu = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)')
    const [gradientIndex, setGradientIndex] = useState(0)
    const [positions, setPositions] = useState(initialPositions)
    const [highlightIndex, setHighlightIndex] = useState(2)
    const [startIndex, setStartIndex] = useState(0)
    const [selectedMenu, setSelectedMenu] = useState(imageUrls[2])
    const [positions2, setPositions2] = useState(initialPositions)
    const [startIndex2, setStartIndex2] = useState(0)
    const [selectedMenu2, setSelectedMenu2] = useState(imageUrls[2])
    const [detailedMenu, setDetailedMenu] = useState()
    const [openCard, setOpenCard] = useState(false)
    const [slide, setSlide] = useState(false)
    const [slide2, setSlide2] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [selectedOutlet, setSelectedOutlet] = useState("")
    const [openOutletList, setOpenOutletList] = useState(false)
    const [openOrderList, setOpenOrderList] = useState(false)
    const visibleCount = 5
    const totalImages = imageUrls.length

    const handleHighlightLeft = () => {
        if (highlightIndex > 0 && !isSmallScreen) {
            if (isAnimating) return
            setIsAnimating(true)
            setSlide(true)
            setSlide2(true)
            setGradientIndex(prev => (prev + 1) % gradients.length)

            setTimeout(() => {
                setHighlightIndex(highlightIndex - 1)
                setSelectedMenu(imageUrls[(startIndex + highlightIndex - 1) % totalImages])
                setSelectedMenu2(imageUrls[(startIndex + highlightIndex - 1) % totalImages])
                setPositions((prev) => {
                    const shifted = [...prev]
                    const first = shifted.shift()
                    shifted.push(first)
                    return shifted
                })
                setSlide(false)

                setTimeout(() => {
                    setIsAnimating(false)
                }, 100)
            }, 100)
        } else {
            handleMovesLeft()
        }
    }

    const handleHighlightRight = () => {
        if (highlightIndex < visibleCount - 1 && !isSmallScreen) {
            if (isAnimating) return
            setIsAnimating(true)
            setSlide(true)
            setSlide2(true)
            setGradientIndex(prev => (prev + 1) % gradients.length)

            setTimeout(() => {

                setHighlightIndex(highlightIndex + 1)
                setSelectedMenu(imageUrls[(startIndex + highlightIndex + 1) % totalImages])
                setSelectedMenu2(imageUrls[(startIndex + highlightIndex + 1) % totalImages])
                setSlide(false)

                setPositions((prev) => {
                    const shifted = [...prev]
                    const last = shifted.pop()
                    shifted.unshift(last)
                    return shifted
                })

                setTimeout(() => {
                    setIsAnimating(false)
                }, 100)
            }, 100)
        } else {
            handleMovesRight()
        }
    }

    const handleOpenCard = () => {
        if (isSmallScreen) return
        const data = {
            Name: selectedMenu.menuName,
            Description: selectedMenu.description,
            ImageUrl: selectedMenu.imgUrl,
            Price: selectedMenu.price
        }
        setDetailedMenu(data)
        setOpenCard(true)
    }

    const handleMovesLeft = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setSlide(true)
        setSlide2(true)
        setGradientIndex(prev => (prev + 1) % gradients.length)
        setTimeout(() => {
            const newStartIndex = (startIndex - 1 + totalImages) % totalImages
            const beforeLeftmostIndex = (newStartIndex + totalImages) % totalImages
            setSelectedMenu(imageUrls[beforeLeftmostIndex])

            setStartIndex(newStartIndex)

            setSlide(false)

            setTimeout(() => {
                setIsAnimating(false)
            }, 100)
        }, 100)
        setPositions((prev) => {
            const shifted = [...prev]
            const first = shifted.shift()
            shifted.push(first)
            return shifted
        })
    }

    const handleMovesRight = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setSlide(true)
        setSlide2(true)
        setGradientIndex(prev => (prev + 1) % gradients.length)
        setTimeout(() => {
            const newStartIndex = (startIndex + 1) % totalImages
            const afterRightmostIndex = (newStartIndex + 4) % totalImages
            setSelectedMenu(imageUrls[afterRightmostIndex])
            setStartIndex(newStartIndex)
            setSlide(false)

            setTimeout(() => {
                setIsAnimating(false)
            }, 100)
        }, 100)
        setPositions((prev) => {
            const shifted = [...prev]
            const last = shifted.pop()
            shifted.unshift(last)
            return shifted
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setSlide2(slide)
            setPositions2(positions)
            setSelectedMenu2(selectedMenu)
            setStartIndex2(startIndex)
        }, 400)
    }, [slide])

    const onCloseMenuDetails = () => {
        setOpenCard(false)
    }

    const onClickOrder = () => {
        setOpenCard(false)
        setOpenOutletList(true)
    }

    const handleBack = () => {
        setOpenOutletList(true)
        setOpenOrderList(false)
    }

    const handleCloseModal = () => {
        setOpenOutletList(false)
    }

    const handleOpenOrderList = (outlet) => {
        handleCloseModal()
        if (outlet?.name?.toLowerCase().includes("big")) {
            handleWhatsAppClick()
            setOpenCard(false)
        } else {
            handleOpenOnlineFoodList(outlet)
            setSelectedOutlet(outlet?.name)
            setOpenCard(false)
        }
    }

    const handleOpenOnlineFoodList = (outlet) => {
        setOpenOrderList(true)
    }

    const handleWhatsAppClick = () => {
        const phoneNumber = "6285922081818"
        const message = encodeURIComponent("Hi Sky Pasta, saya mau order!")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }

    const handleOpenMenu = () => {
        redirect("/menu-details")
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "90vh",
                marginTop: "10%",
            }}>
            <Box
                sx={{
                    width: 1000,
                    height: 1000,
                    position: "absolute",
                    zIndex: -111,
                    left: -320,
                    top: { xs: -800, md: -650 },
                    borderRadius: "50%",
                    background: gradients[gradientIndex],
                    WebkitMask: "radial-gradient(circle at center, transparent 50%, black 51%)",
                    mask: "radial-gradient(circle at center, transparent 50%, black 51%)",
                }}
            />

            {openCard && (
                <MenuDetailsCard onClose={onCloseMenuDetails} menu={detailedMenu} onClickOrder={onClickOrder} />
            )}
            <OrderCard selectedOutlet={selectedOutlet} openOrderList={openOrderList} openOutletList={openOutletList} handleBack={handleBack} handleCloseModal={handleCloseModal} handleOpenOrderList={handleOpenOrderList} outlets={outlets} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    height: "40vh",
                    mb: { xs: "18rem", md: "10rem" },
                    ml: { xs: "36.5rem", md: 0 },
                }}>
                <MenuItem
                    slide={slide}
                    positions={positions}
                    imageUrls={imageUrls}
                    initialPositions={initialPositions}
                />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    left: { xs: -277, md: 0 },
                    bottom: { xs: "12%", md: "10%" },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1em",
                    margin: 0,
                }}>
                <LowerItem handleHighlightRight={handleHighlightRight} handleHighlightLeft={handleHighlightLeft} highlightIndex={highlightIndex} gradientIndex={gradientIndex} slide={slide2} handleOpenCard={handleOpenCard} selectedMenu={selectedMenu2} totalImages={totalImages} visibleCount={visibleCount} startIndex={startIndex2} handleMovesRight={handleMovesRight} handleMovesLeft={handleMovesLeft} imageUrls={imageUrls}></LowerItem>
            </Box>
            <Box
                sx={{
                    display: isSmallScreen ? "flex" : "none",
                    zIndex: 99,
                    width: "50%",
                    position: "absolute",
                    ml: 25,
                    bottom: "45%",
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
        </Box >
    )
}

export default ChooseMenu

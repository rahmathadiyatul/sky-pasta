import React, { useState } from 'react'
import MenuItem from './MenuItem/MenuItem'
import LowerItem from './LowerItem/LowerItem'
import { Box, Card, Typography } from '@mui/material'
import MenuDetailsCard from '@/components/MenuDetailsCard'
import OrderCard from '@/components/OrderCard'
import { outlets } from '@/database/page'

const imageUrls = [
    {
        menuName: "Mac n Cheese",
        imgUrl: "/recommended/sky1.png",
        description: "Creamy macaroni pasta smothered in rich cheese sauce and topped with savory cheddar cheese. A perfect balance of indulgent, cheesy goodness with a hint of sweetness—kid-approved and irresistibly delicious!",
        price: 33800
    },
    {
        menuName: "Ultimate Meat Lovers",
        imgUrl: "/recommended/sky2.png",
        description: "A bold and unique pizza with spicy sauce, ground beef, smoked beef, mushrooms, and onions—topped with fresh basil leaves, cherry tomatoes, real chili, and gooey mozzarella cheese. A perfect balance of heat, savory goodness, and pure addictiveness!",
        price: 102500
    },
    {
        menuName: "Tortilla Prime Cheese",
        imgUrl: "/recommended/sky3.png",
        description: "A delightful fusion of three types of cheese paired with sweet corn and crispy tortilla, topped with savory pepperoni, sausages, and melty mozzarella. This pizza delivers a cheesy, rich, and slightly sweet flavor that’s simply irresistible!",
        price: 109000
    },
    {
        menuName: "Tomato Grilled Chicken",
        imgUrl: "/recommended/sky4.png",
        description: "Juicy chicken thigh steak, coated in a rich and creamy tomato sauce that brings out a perfect blend of savory and umami flavors. Served with crispy french fries and fresh salad, making it a complete and satisfying dinner choice!",
        price: 48750
    },
    {
        menuName: "Fettuccine Premium Crispy",
        imgUrl: "/recommended/sky5.png",
        description: "A rich and creamy pasta dish topped with premium smoked beef, mushrooms, and torched mozzarella. The perfect blend of creaminess, savory goodness, and deep umami flavors in every bite!",
        price: 51000
    },
    {
        menuName: "Spaghetti Aglio Olio Chilli Oil",
        imgUrl: "/recommended/sky6.png",
        description: "A fusion pasta with bold oriental flavors, featuring slow-infused chili oil, tender chicken, mushrooms, cherry tomatoes, and parmesan cheese. Every bite delivers a rich, spicy, and savory sensation with a delightfully indulgent touch!",
        price: 54375
    },
    {
        menuName: "Crispy Chicken Sauce with Fries",
        imgUrl: "/recommended/sky7.png",
        description: "Golden crispy chicken paired with your choice of rich creamy mushroom, smoky BBQ, bold black pepper, or savory cheese sauce. Served with crispy french fries, making it the perfect lunch indulgence!",
        price: 43550
    },
    {
        menuName: "Milkshake Popcorn Caramel",
        imgUrl: "/recommended/sky8.png",
        description: "A luscious milkshake blend of fresh milk, salted caramel popcorn, creamy gelato, and rich caramel sauce, topped with a swirl of whipped cream. Indulge in its sweet, creamy, and slightly savory delight!",
        price: 38000
    },
    {
        menuName: "Milkshake Caramel Macchiato",
        imgUrl: "/recommended/sky9.png",
        description: "A harmonious blend of milk, coffee, and rich caramel sauce, topped with a velvety swirl of whipped cream. This creamy coffee treat offers a perfect balance of sweetness with a hint of salty caramel indulgence!",
        price: 38000
    },
]

const initialPositions = [
    "translate(-150%, -150%)",
    "translate(-150%, -150%)",
    "translate(-150%, -150%)",
    "translate(-150%, -150%)",
    "translate(-118%, 0%)",
    "translate(150%, -150%)",
    "translate(150%, -150%)",
    "translate(150%, -150%)",
    "translate(150%, -150%)"
]

const ChooseMenu = () => {
    const [positions, setPositions] = useState(initialPositions)
    const [startIndex, setStartIndex] = useState(3)
    const [selectedMenu, setSelectedMenu] = useState(imageUrls[4])
    const [detailedMenu, setDetailedMenu] = useState()
    const [openCard, setOpenCard] = useState(false)
    const [slide, setSlide] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [selectedOutlet, setSelectedOutlet] = useState("")
    const [openOutletList, setOpenOutletList] = useState(false)
    const [openOrderList, setOpenOrderList] = useState(false)
    const visibleCount = 3
    const totalImages = imageUrls.length
    const handleOpenCard = () => {
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

        setTimeout(() => {
            const imageIndex = ((startIndex - 2 + totalImages) % totalImages) + 2
            const newMenu = imageIndex < 9
                ? imageUrls[imageIndex]
                : imageUrls[imageIndex - totalImages]

            setSelectedMenu(newMenu)
            setPositions((prev) => {
                const shifted = [...prev]
                const first = shifted.shift()
                shifted.push(first)
                return shifted
            })

            setStartIndex((prev) => (prev - 1 + totalImages) % totalImages)

            setSlide(false)

            setTimeout(() => {
                setIsAnimating(false)
            }, 100)
        }, 100)
    }

    const handleMovesRight = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setSlide(true)
        setTimeout(() => {
            setPositions((prev) => {
                const shifted = [...prev]
                const last = shifted.pop()
                shifted.unshift(last)
                return shifted
            })
            setSelectedMenu(imageUrls[(startIndex + 2) % totalImages])
            setStartIndex((prev) => (prev + 1) % totalImages)
            setSlide(false)

            setTimeout(() => {
                setIsAnimating(false)
            }, 100)
        }, 100)
    }

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

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "90vh",
                marginTop: "5%",
            }}>
            {openCard && (
                <MenuDetailsCard onClose={onCloseMenuDetails} menu={detailedMenu} onClickOrder={onClickOrder} />
            )}
            <OrderCard selectedOutlet={selectedOutlet} openOrderList={openOrderList} openOutletList={openOutletList} handleBack={handleBack} handleCloseModal={handleCloseModal} handleOpenOrderList={handleOpenOrderList} outlets={outlets} />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    height: "40vh",
                    mb: { xs: "15rem", md: "10rem" },
                    ml: { xs: "26.5rem", md: 0 },
                }}>
                <MenuItem slide={slide} positions={positions} imageUrls={imageUrls} initialPositions={initialPositions} />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    left: { xs: "37%", md: "42%" },
                    bottom: { xs: "12%", md: "10%" },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1em",
                    margin: 0,
                }}>
                <LowerItem slide={slide} handleOpenCard={handleOpenCard} selectedMenu={selectedMenu} totalImages={totalImages} visibleCount={visibleCount} startIndex={startIndex} handleMovesRight={handleMovesRight} handleMovesLeft={handleMovesLeft} imageUrls={imageUrls}></LowerItem>
            </Box>
        </Box >
    )
}

export default ChooseMenu

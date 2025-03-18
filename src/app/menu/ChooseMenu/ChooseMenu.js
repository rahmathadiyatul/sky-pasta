import React, { useState } from 'react';
import MenuItem from './MenuItem/MenuItem';
import LowerItem from './LowerItem/LowerItem';
import { Box, Card, Typography } from '@mui/material';

const imageUrls = [
    {
        menuName: "Mac n Cheese",
        imgUrl: "/recommended/sky1.png",
        description: "Creamy macaroni pasta smothered in rich cheese sauce and topped with savory cheddar cheese. A perfect balance of indulgent, cheesy goodness with a hint of sweetness—kid-approved and irresistibly delicious!"
    },
    {
        menuName: "Ultimate Meat Lovers",
        imgUrl: "/recommended/sky2.png",
        description: "A bold and unique pizza with spicy sauce, ground beef, smoked beef, mushrooms, and onions—topped with fresh basil leaves, cherry tomatoes, real chili, and gooey mozzarella cheese. A perfect balance of heat, savory goodness, and pure addictiveness!"
    },
    {
        menuName: "Tortilla Prime Cheese",
        imgUrl: "/recommended/sky3.png",
        description: "A delightful fusion of three types of cheese paired with sweet corn and crispy tortilla, topped with savory pepperoni, sausages, and melty mozzarella. This pizza delivers a cheesy, rich, and slightly sweet flavor that’s simply irresistible!"
    },
    {
        menuName: "Tomato Grilled Chicken",
        imgUrl: "/recommended/sky4.png",
        description: "Juicy chicken thigh steak, coated in a rich and creamy tomato sauce that brings out a perfect blend of savory and umami flavors. Served with crispy french fries and fresh salad, making it a complete and satisfying dinner choice!"
    },
    {
        menuName: "Fettuccine Premium Crispy",
        imgUrl: "/recommended/sky5.png",
        description: "A rich and creamy pasta dish topped with premium smoked beef, mushrooms, and torched mozzarella. The perfect blend of creaminess, savory goodness, and deep umami flavors in every bite!"
    },
    {
        menuName: "Spaghetti Aglio Olio Chilli Oil",
        imgUrl: "/recommended/sky6.png",
        description: "A fusion pasta with bold oriental flavors, featuring slow-infused chili oil, tender chicken, mushrooms, cherry tomatoes, and parmesan cheese. Every bite delivers a rich, spicy, and savory sensation with a delightfully indulgent touch!"
    },
    {
        menuName: "Crispy Chicken Sauce with Fries",
        imgUrl: "/recommended/sky7.png",
        description: "Golden crispy chicken paired with your choice of rich creamy mushroom, smoky BBQ, bold black pepper, or savory cheese sauce. Served with crispy french fries, making it the perfect lunch indulgence!"
    },
    {
        menuName: "Milkshake Popcorn Caramel",
        imgUrl: "/recommended/sky8.png",
        description: "A luscious milkshake blend of fresh milk, salted caramel popcorn, creamy gelato, and rich caramel sauce, topped with a swirl of whipped cream. Indulge in its sweet, creamy, and slightly savory delight!"
    },
    {
        menuName: "Milkshake Caramel Macchiato",
        imgUrl: "/recommended/sky9.png",
        description: "A harmonious blend of milk, coffee, and rich caramel sauce, topped with a velvety swirl of whipped cream. This creamy coffee treat offers a perfect balance of sweetness with a hint of salty caramel indulgence!"
    },
];

const initialPositions = [
    "translate(-430%, -170%)",
    "translate(-340%, -120%)",
    "translate(-240%, -80%)",
    "translate(-140%, -40%)",
    "translate(-35%, 0%)",
    "translate(80%, -40%)",
    "translate(180%, -80%)",
    "translate(280%, -120%)",
    "translate(380%, -170%)"
];

const ChooseMenu = () => {
    const [positions, setPositions] = useState(initialPositions);
    const [startIndex, setStartIndex] = useState(3);
    const [selectedMenu, setSelectedMenu] = useState(imageUrls[4]);
    const visibleCount = 3;
    const totalImages = imageUrls.length;
    const handleLowerMenuClick = (menu) => {
        // setSlide(!slide);
        // if (onMenuChange) {
        //     onMenuChange(menu);
        // }
    };

    const handleMovesLeft = () => {
        setPositions((prev) => {
            const shifted = [...prev];
            const first = shifted.shift();
            shifted.push(first);
            return shifted;
        });
        setSelectedMenu(imageUrls[(startIndex - 2 + totalImages) % totalImages]);
        setStartIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    const handleMovesRight = () => {
        setPositions((prev) => {
            const shifted = [...prev];
            const last = shifted.pop();
            shifted.unshift(last);
            return shifted;
        });
        setSelectedMenu(imageUrls[(startIndex + 2) % totalImages]);
        setStartIndex((prev) => (prev + 1) % totalImages);
    };

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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-aroundf",
                    height: "40vh",
                    mb: { xs: "15rem", md: "10rem" }
                }}>
                <MenuItem positions={positions} imageUrls={imageUrls} initialPositions={initialPositions} />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    left: { xs: "28%", md: "48.25%" },
                    bottom: { xs: "10%", md: "10%" },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1em",
                    margin: 0,
                }}>
                <LowerItem selectedMenu={selectedMenu} totalImages={totalImages} visibleCount={visibleCount} startIndex={startIndex} handleMovesRight={handleMovesRight} handleMovesLeft={handleMovesLeft} onLowerMenuClick={handleLowerMenuClick} imageUrls={imageUrls}></LowerItem>
            </Box>
        </Box >
    );
};

export default ChooseMenu;

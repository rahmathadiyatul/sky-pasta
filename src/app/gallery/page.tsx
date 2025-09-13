"use client"

import React, { useState, useRef } from "react"
import { Box, Stack, IconButton, CardMedia, Typography } from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Header from "@/components/Header"

export default function Gallery() {
    const [selectedCard, setSelectedCard] = useState<number>(0)
    const [openCard, setOpenCard] = useState<boolean>(false)

    const onClickCard = (index: number) => {
        setSelectedCard(index)
        setOpenCard(true)
    }

    const onCloseCard = () => {
        setSelectedCard(0)
        setOpenCard(false)
    }

    return (
        <Box>
            <Typography
                sx={{
                    position: "absolute",
                    textAlign: "center",
                    width: "100%",
                    color: "#c72026",
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    textShadow: "0 2px 8px rgba(255,255,255,0.7)",
                    fontSize: { xs: 24, md: 60 },
                    mt: 3,
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            >
                Ambience
            </Typography>
            <Box sx={{ mt: { xs: 10, md: 15 } }}>
                <ImageCarousel
                    images={[
                        "/gallery/gallery1.JPG",
                        "/gallery/gallery2.JPG",
                        // "/gallery/gallery3.JPG",
                        // "/gallery/gallery4.PNG",
                        "/gallery/gallery5.PNG",
                        "/gallery/gallery6.PNG",
                        "/gallery/gallery7.JPG",
                        "/gallery/gallery8.JPG",
                        "/gallery/gallery9.JPG",
                        // "/gallery/gallery10.JPG",
                        // "/gallery/gallery11.JPG",
                        "/gallery/gallery12.JPG",
                        "/gallery/gallery13.JPG",
                        "/gallery/gallery14.JPG",
                        "/gallery/gallery15.JPG",
                        "/gallery/gallery16.JPG",
                        "/gallery/gallery17.JPG",
                        "/gallery/gallery18.JPG",
                        "/gallery/gallery19.JPEG",
                        "/gallery/gallery20.JPG",
                        "/gallery/gallery21.JPG",
                        "/gallery/gallery22.JPG",
                        "/gallery/gallery23.JPG",
                        "/gallery/gallery24.JPG",
                        "/gallery/gallery25.JPG",
                        "/gallery/gallery26.JPG",
                        "/gallery/gallery27.JPG",
                        "/gallery/gallery28.JPG"
                    ]}
                    ratio="16/9"
                />
            </Box>
            <Header />
        </Box>
    )
}

function ImageCarousel({
    images,
    ratio = "16/9",
}: {
    images: string[]
    ratio?: string
}) {
    const [idx, setIdx] = useState(0)
    const touchStartX = useRef<number | null>(null)

    const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
    const next = () => setIdx((i) => (i + 1) % images.length)

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
    }

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX
    }
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current == null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) > 40) (dx > 0 ? prev() : next())
        touchStartX.current = null
    }

    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "90%", md: "60%" },
                maxWidth: 1200,
                mx: "auto",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                aspectRatio: { xs: "4/5", sm: "3/4", md: "16/9" },
                maxHeight: { xs: "80vh", md: "none" },
                bgcolor: "black",
            }}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <CardMedia
                component="img"
                src={images[idx]}
                alt={`slide-${idx + 1}`}
                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",      // fills the frame
                    objectPosition: "50% 50%", // adjust focus if needed (e.g. "50% 20%")
                    userSelect: "none",
                    pointerEvents: "none",
                    display: "block",
                }}
            />
            <IconButton
                onClick={prev}
                aria-label="Previous"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 8,
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(0,0,0,0.4)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                    color: "white",
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
                onClick={next}
                aria-label="Next"
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 8,
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(0,0,0,0.4)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                    color: "white",
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>

            {/* Dots */}
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    position: "absolute",
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "rgba(0,0,0,0.35)",
                    p: 0.5,
                    borderRadius: 2,
                }}
            >
                {images.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => setIdx(i)}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            cursor: "pointer",
                            bgcolor: i === idx ? "white" : "rgba(255,255,255,0.5)",
                        }}
                    />
                ))}
            </Stack>
        </Box>
    )
}

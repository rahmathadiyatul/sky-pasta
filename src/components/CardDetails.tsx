"use client";

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";

interface CardDetailsProps {
    onClose: () => void;
    details: any;
}

export default function CardDetails({ onClose, details }: CardDetailsProps) {
    const [showSecondPage, setShowSecondPage] = useState(false);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
            onClick={onClose}
        >
            <Card
                sx={{
                    maxWidth: 400,
                    minWidth: "50vw",
                    bgcolor: "white",
                    boxShadow: 24,
                    p: 2,
                    borderRadius: 2,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={showSecondPage && details.bg2 ? details.bg2 : details.bg}
                        alt={`${details.title} Sky Pasta`}
                        sx={{ maxHeight: 350 }}
                    />
                    <CardContent>
                        <Typography
                            fontSize={30}
                            fontWeight={"bolder"}
                            fontFamily={"Nunito"}
                            textAlign={"center"}
                            color="#c72026"
                            gutterBottom
                            variant="h5"
                        >
                            {!showSecondPage ? details.title : ""}
                        </Typography>
                        <Typography textAlign={"center"} variant="body2" sx={{ color: 'text.secondary' }}>
                            {showSecondPage && details.description2 ? details.description2 : details.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions sx={{ justifyContent: "space-between" }}>
                    {showSecondPage && (
                        <Button
                            size="small"
                            sx={{ fontWeight: "bolder", color: 'black', fontFamily: "Nunito", textTransform: "capitalize" }}
                            onClick={() => setShowSecondPage(false)}
                        >
                            {"<< Previous"}
                        </Button>
                    )}

                    {details.description2 && !showSecondPage && (
                        <Button
                            size="small"
                            sx={{ fontWeight: "bolder", color: 'black', fontFamily: "Nunito", textTransform: "capitalize", marginLeft: "auto" }}
                            onClick={() => setShowSecondPage(true)}
                        >
                            {"Next >>"}
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Box>
    );
}

"use client";

import React from "react";
import { Box, Button, List, ListItem, ListItemText, Modal, Typography } from "@mui/material";

interface OrderProps {
    outlets: any;
    selectedOutlet: any;
    openOutletList: boolean;
    openOrderList: boolean;
    handleBack: () => void;
    handleCloseModal: () => void;
    handleOpenOrderList: (outlet: any) => void;
}

export default function OrderCard({ selectedOutlet, openOrderList, openOutletList, handleBack, handleCloseModal, handleOpenOrderList, outlets }: OrderProps) {
    <Box>
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
                    {outlets.map((outlet: any, index: number) => (
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
                    {outlets.find((x: any) => x.name == selectedOutlet)?.onlineFoodUrl.map((merchant: any, index: number) => (
                        <ListItem
                            key={index}
                            component="button"
                            //onClick={() => handleOrderByMerchant(merchant?.merchantUrl)}
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
    </Box>
}
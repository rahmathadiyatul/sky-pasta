"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../header/page";

export default function MenuDetails() {
    return (
        <Box
            sx={{
                height: "100vh",
                overflowY: "auto",
            }}
        >
            <Header />
            <div style={{ height: "200vh", background: "lightgray" }}>
                Scrollable Content
            </div>
        </Box>
    );
}
import { createTheme } from "@mui/material/styles";
import { Nunito } from "next/font/google";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const theme = createTheme({
    typography: {
        fontFamily: nunito.style.fontFamily,
    },
    palette: {
        primary: {
            main: "#ff5733",
        },
        secondary: {
            main: "#ffcc00",
        },
    },
});

export default theme;

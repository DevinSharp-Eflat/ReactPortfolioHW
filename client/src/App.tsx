import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'
import { createTheme, ThemeProvider } from "@mui/system";
import { green, purple } from '@mui/material/colors';

export default function App() {

    const theme = createTheme({
        palette: {
          primary: {
            main: purple[500],
          },
          secondary: {
            main: green[500],
          },
        },
      });

    return(
        <>
        <ThemeProvider theme={theme}>
        <Header />
            <Outlet />
        <Footer />
        </ThemeProvider>

        </>
    )
}
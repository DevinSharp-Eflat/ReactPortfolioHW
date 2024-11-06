import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer.tsx'
import Header from '../components/Header.tsx'

export default function App() {
    return(
        <>
        <Header />
            <Outlet />
        <Footer />

        </>
    )
}
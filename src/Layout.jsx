import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
};

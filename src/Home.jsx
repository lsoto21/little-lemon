import { About } from "./About";
import { CallToAction } from "./CallToAction";
import { CustomersSays } from "./CustomersSays";
import { Specials } from "./Specials";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToAbout) {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <main style={styles.main}>
            <CallToAction />
            <Specials />
            <CustomersSays />
            <About />
        </main>
    )
};

const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
};
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Nav.css';

export const Nav = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleAboutClick = (e) => {
        e.preventDefault();

        if (location.pathname === "/") {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollToAbout: true } });
        }
    };


    return (
        <nav className="nav">
            <img src={require("./assets/logo.png")} className="navLogo" alt="Little Lemon Logo" />
            <ul className="navSection">
                <li>
                    <Link
                        to="/"
                        className={`navLink ${location.pathname === "/" ? "active" : ""}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <a
                        href="#about"
                        onClick={handleAboutClick}
                        className={`navLink ${location.pathname === "/#about" ? "active" : ""}`}
                    >
                        About
                    </a>
                </li>
                <li>
                    <Link
                        to="/menu"
                        className={`navLink ${location.pathname === "/menu" ? "active" : ""}`}
                    >
                        Menu
                    </Link>
                </li>
                <li>
                    <Link
                        to="/reservations"
                        className={`navLink ${location.pathname === "/reservations" ? "active" : ""}`}
                    >
                        Reservations
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className={`navLink ${location.pathname === "/login" ? "active" : ""}`}
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

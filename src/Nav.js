export const Nav = () => {
    return (
        <nav style={styles.navigation}>
            <img src={require("./assets/logo.png")} style={styles.logo} alt="Little Lemon Logo" />
            <ul style={styles.navSection}>
                <li>
                    <a href="/" style={styles.link}>Home</a>
                </li>
                <li>
                    <a href="/about" style={styles.link}>About</a>
                </li>
                <li>
                    <a href="/menu" style={styles.link}>Menu</a>
                </li>
                <li>
                    <a href="/reservations" style={styles.link}>Reservations</a>
                </li>
                <li>
                    <a href="/order" style={styles.link}>Order Online</a>
                </li>
                <li>
                    <a href="/login" style={styles.link}>Login</a>
                </li>
            </ul>
        </nav>
    )
};

const styles = {
    navigation: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1vh",
        paddingBottom: "1vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        gap: "4vw",
    },
    navSection: {
        display: "flex",
        flexDirection: "row",
        listStyle: "none",
        gap: "2vw",
    },
    logo: {
        width: "20%",
    },
    link: {
        textDecoration: "none",
    }
};

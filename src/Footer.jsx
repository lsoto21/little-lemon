export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <img src={require("./assets/logo2.png")} alt="Little Lemon Logo" style={{ width: "20%", alignSelf: "center" }} />
            <div style={styles.footerSection}>
                <h4>Web Navigation</h4>
                <ul style={styles.ul}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Reservations</li>
                    <li>Menu</li>
                    <li>Login</li>
                </ul>
            </div>
            <div style={styles.footerSection}>
                <h4>Contact</h4>
                <ul style={styles.ul}>
                    <li>Address: 123 Main St, Chicago, IL 60601</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: little-lemon@gmail.com</li>
                </ul>
            </div>
            <div style={styles.footerSection}>
                <h4>Follow Us</h4>
                <ul style={styles.ul}>
                    <li>Address: 123 Main St, Chicago, IL 60601</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: little-lemon@gmail.com</li>
                </ul>
            </div>
        </footer>
    )
}

const styles = {
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: "4vh",
        paddingBottom: "4vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        backgroundColor: "#cfcfcf70",
    },
    footerSection: {
        width: "25%",
        display: "flex",
        flexDirection: "column",
    },
    ul: {
        padding: 0,
        margin: 0,
        listStyle: "none",
    },
}

import { useState } from "react";

export const CallToAction = () => {
    const [hover, setHover] = useState(false);

    const buttonStyles = {
        width: "50%",
        padding: "1vw",
        fontSize: "1.5vw",
        backgroundColor: hover ? "#ffffff00" : "#F4CE14",
        color: hover ? "#F4CE14" : "#495E57",
        marginBottom: "1vw",
        fontWeight: "bold",
        border: "2px solid #F4CE14",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "background-color color 0.3s",
    };

    const navigateReservations = () => {
        window.location.href = "/reservations";
    }

    return (
        <section style={styles.container}>
            <div style={styles.textContainer}>
                <h1 style={{ fontSize: "5vw", marginBottom: "0" }}>Little Lemon</h1>
                <span style={{ fontFamily: "Markazi Text, serif", fontSize: "3vw" }}>Chicago</span>
                <p style={{ fontFamily: "Karla, sans-serif", fontSize: "1.5vw", marginBottom: "4vh" }}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button style={buttonStyles} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={navigateReservations}>Reserve a table</button>
            </div>
            <img src={require("./assets/logo2.png")} alt="Little Lemon Hero" style={{ width: "100%", justifyContent: "center", alignItems: "center" }} />
        </section>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        backgroundColor: "#495E57",
        color: "white",
        gap: "15vw",
        marginBottom: "4vh",
    },
    textContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
};
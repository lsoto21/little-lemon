export const About = () => {
    return (
        <section id="about" style={{ ...styles.section, flexDirection: "row", flex: 1, gap: "5vw", alignItems: "center" }}>
            <img src={require("./assets/little_lemon-gpt.png")} alt="Little Lemon Hero" style={{ width: "1fr", height: "40vh" }} />
            <div style={styles.aboutText}>
                <h2 style={{ fontSize: "4vw", margin: 0 }}>Little Lemon</h2>
                <span style={{ fontSize: "3vw", fontFamily: "Markazi Text, serif", color: "#495E57" }}>Chicago</span>
                <p style={{ fontFamily: "Karla, sans-serif" }}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
        </section>
    )
}

const styles = {
    section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "8vh",
        marginBottom: "10vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    },
    aboutText: {
        width: "1fr",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
};
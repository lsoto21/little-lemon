export const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.textContainer}>
                <h1>Little Lemon</h1>
                <span>Chicago</span>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button style={styles.button}>Reserve a table</button>
            </div>
            <img src={require("./assets/logo2.png")} alt="Little Lemon Hero" style={{ width: "100%", justifyContent: "center", alignItems: "center" }} />
        </header>
    )
}

const styles = {
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    },
    textContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        width: "50%",
        padding: "1vw",
        fontSize: "1.2vw",
        backgroundColor: "#F4CE14",
    }

}
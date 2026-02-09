export const Main = () => {
    return (
        <main style={styles.main}>
            <section style={styles.section}>
                <div style={styles.titleSection}>
                    <h2>Specials</h2>
                    <button style={styles.button}>Online Menu</button>
                </div>
                <div style={styles.cards}>
                    <article style={styles.specialCard}>
                        <img src={require("./assets/logo2.png")} alt="Greek Salad" style={{ width: "100%" }} />
                        <div style={styles.specialCardDescription}>
                            <h3>Greek Salad</h3>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>$12.99</p>
                        </div>
                    </article>
                    <article style={styles.specialCard}>
                        <img src={require("./assets/logo2.png")} alt="Greek Salad" style={{ width: "100%" }} />
                        <div style={styles.specialCardDescription}>
                            <h3>Greek Salad</h3>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>$12.99</p>
                        </div>
                    </article>
                    <article style={styles.specialCard}>
                        <img src={require("./assets/logo2.png")} alt="Greek Salad" style={{ width: "100%" }} />
                        <div style={styles.specialCardDescription}>
                            <h3>Greek Salad</h3>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p style={{ fontSize: "1.5vw", fontWeight: "bold" }}>$12.99</p>
                        </div>
                    </article>
                </div>
            </section>
            <section style={styles.section}>
                <h2>Testimonials</h2>
                <div style={styles.cards}>
                    <article>
                        <h3>Rating</h3>
                        <div style={styles.ratingUser}>
                            <img src={require("./assets/logo2.png")} alt="User" style={{ width: "20%" }} />
                            <span>John Doe</span>
                        </div>
                        <p>"Excellent food and service!"</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div style={styles.ratingUser}>
                            <img src={require("./assets/logo2.png")} alt="User" style={{ width: "20%" }} />
                            <span>Lucas Soto</span>
                        </div>
                        <p>"The best Mediterranean food in Chicago!"</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div style={styles.ratingUser}>
                            <img src={require("./assets/logo2.png")} alt="User" style={{ width: "20%" }} />
                            <span>Michael Johnson</span>
                        </div>
                        <p>"The service was outstanding!"</p>
                    </article>
                    <article>
                        <h3>Rating</h3>
                        <div style={styles.ratingUser}>
                            <img src={require("./assets/logo2.png")} alt="User" style={{ width: "20%" }} />
                            <span>Jane Smith</span>
                        </div>
                        <p>"The atmosphere was perfect!"</p>
                    </article>
                </div>
            </section>
            <section style={{ ...styles.section, flexDirection: "row" }}>
                <div style={styles.aboutText}>
                    <h2>Little Lemon</h2>
                    <span>Chicago</span>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <img src={require("./assets/logo2.png")} alt="Little Lemon Hero" style={{ width: "100%" }} />
            </section>
        </main>
    )
};

const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    },
    section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    titleSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2vh",
        marginTop: "1vh",
    },
    cards: {
        display: "flex",
        flexDirection: "row",
        gap: "2vw",
    },
    specialCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
    },
    specialCardDescription: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1vw",
    },
    ratingUser: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1vw",
    },
    aboutText: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
};
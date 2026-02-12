import { useState } from "react";

export const CustomersSays = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const testimonialsData = [
        {
            name: "John Doe",
            text: "Excellent food and service!",
            img: require("./assets/logo2.png"),
        },
        {
            name: "Lucas Soto",
            text: "The best Mediterranean food in Chicago!",
            img: require("./assets/logo2.png"),
        },
        {
            name: "Michael Johnson",
            text: "The service was outstanding!",
            img: require("./assets/logo2.png"),
        },
        {
            name: "Jane Smith",
            text: "The atmosphere was perfect!",
            img: require("./assets/logo2.png"),
        },
    ];

    return (
        <section style={styles.section}>
            <h2 style={{ fontSize: "4vw", color: "#ffffff" }}>Testimonials</h2>

            <div style={styles.cards}>
                {testimonialsData.map((item, index) => (
                    <article
                        key={index}
                        style={{
                            ...styles.ratingCard,
                            transform: hoverIndex === index ? "scale(1.03)" : "scale(1)",
                            boxShadow: hoverIndex === index
                                ? "5px 5px 12px rgba(0,0,0,0.2)"
                                : "3px 3px 8px rgba(0,0,0,0.15)",
                            transition: "transform 0.2s, box-shadow 0.2s",
                        }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <h3 style={{ fontSize: "2vw" }}>Rating</h3>
                        <div style={styles.ratingUser}>
                            <img src={item.img} alt={item.name} style={{ width: "20%" }} />
                            <span>{item.name}</span>
                        </div>
                        <p style={styles.ratingText}>"{item.text}"</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

const styles = {
    section: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "2vh",
        padding: "0 10vw 10vh 10vw",
        backgroundColor: "#407865c4",
    },
    cards: {
        display: "flex",
        flexDirection: "row",
        gap: "2vw",
    },
    ratingCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#ffffff",
        padding: "1.5vw",
        borderRadius: "16px",
        flex: 1,
        overflow: "hidden",
        boxShadow: "3px 3px 8px rgba(0,0,0,0.15)",
    },
    ratingUser: {
        fontFamily: "Karla, sans-serif",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5vw",
        margin: "1vw 0",
    },
    ratingText: {
        fontFamily: "Karla, sans-serif",
        fontSize: "1vw",
        marginTop: "0.5vw",
    },
};

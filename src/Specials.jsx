import { useState } from "react";

export const Specials = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const specialsData = [
        {
            name: "Greek Salad",
            price: "$12.99",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            img: require("./assets/Greek-Salad-4.jpg"),
        },
        {
            name: "Bruschetta",
            price: "$5.99",
            desc: "Our Bruschetta is made with fresh tomatoes, garlic, and basil on a crispy baguette.",
            img: require("./assets/bruschetta.jpg"),
        },
        {
            name: "Lemon Dessert",
            price: "$5.00",
            desc: "This comes as a surprise to many, but lemon dessert is a classic favorite in our restaurant.",
            img: require("./assets/lemon-dessert.jpg"),
        },
    ];

    const navigateMenu = () => {
        window.location.href = "/menu";
    };

    return (
        <section style={styles.section}>
            {/* Título y botón */}
            <div style={styles.titleSection}>
                <h2 style={{ fontSize: "4vw" }}>Specials</h2>
                <button
                    style={styles.button}
                    onClick={navigateMenu}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#ffffff00"; e.currentTarget.style.color = "#495E57"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#495E57"; e.currentTarget.style.color = "#ffffff"; }}
                >
                    Online Menu
                </button>
            </div>

            {/* Tarjetas */}
            <div style={styles.cards}>
                {specialsData.map((item, index) => (
                    <article
                        key={index}
                        style={{
                            ...styles.specialCard,
                            transform: hoverIndex === index ? "scale(1.03)" : "scale(1)",
                            transition: "transform 0.2s",
                        }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <img src={item.img} alt={item.name} style={styles.cardImage} />
                        <div style={styles.specialCardTextBox}>
                            <div style={styles.specialCardTitle}>
                                <h3 style={{ margin: 0 }}>{item.name}</h3>
                                <p style={styles.price}>{item.price}</p>
                            </div>
                            <p style={styles.specialCardDescription}>{item.desc}</p>
                        </div>
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
        padding: "0 10vw",
        marginBottom: "10vh",
    },
    titleSection: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1vh 0 0vh 0",
    },
    button: {
        padding: "1vw",
        fontSize: "1.5vw",
        backgroundColor: "#495E57",
        color: "#ffffff",
        fontWeight: "bold",
        border: "2px solid #495E57",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "background-color 0.3s, color 0.3s",
    },
    cards: {
        display: "flex",
        gap: "2vw",
    },
    specialCard: {
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        flex: 1,
        maxWidth: "40%",
        overflow: "hidden",
        boxShadow: "3px 3px 8px rgba(0,0,0,0.15)",
        backgroundColor: "#ffffff",
    },
    cardImage: {
        width: "100%",
        height: "45vh",
        objectFit: "cover",
    },
    specialCardTextBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2vw",
    },
    specialCardTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        fontSize: "1.8vw",
    },
    price: {
        fontSize: "1.5vw",
        fontWeight: "bold",
        color: "#c9a800",
    },
    specialCardDescription: {
        fontFamily: "Karla, sans-serif",
        fontSize: "1vw",
    },
};

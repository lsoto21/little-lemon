import { BookingForm } from "./BookingForm";

export const BookingPage = () => {
    return (
        <div style={styles.main}>
            <h1 style={styles.title}>Book a Table</h1>
            <BookingForm />
        </div>
    )
}

const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: 0,
    },
    title: {
        fontSize: "4vw",
        color: "#F4CE14",
        margin: 0,
        paddingTop: "6vh",
        paddingBottom: "6vh",
        paddingLeft: "10vw",
        paddingRight: "10vw",
        backgroundColor: "#495E57",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
};

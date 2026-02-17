import { useState } from "react";

export const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        dispatch({
            type: "SELECT_DATE",
            payload: selectedDate,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date || !time) return;

        const formData = {
            date,
            time,
            guests,
            occasion,
        };

        submitForm(formData);

        dispatch({
            type: "BOOK_TIME",
            payload: { date, time },
        });

        setTime("");
    };

    const timesForSelectedDate = availableTimes[date] || [];

    return (
        <div style={styles.bookingContainer}>
            <form style={styles.form} onSubmit={handleSubmit}>
                {/* Fecha */}
                <div style={styles.row}>
                    <label style={styles.label}>Choose date</label>
                    <input style={styles.input}
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>


                {/* Hora */}

                <div style={styles.row}>
                    <label style={styles.label}>Choose time</label>
                    <select style={styles.input}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        disabled={!date}
                    >
                        <option value="">Select a time</option>
                        {timesForSelectedDate.map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>

                <div style={styles.row}>
                    <label style={styles.label}>Guests</label>
                    <input style={styles.input}
                        type="number"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>

                <div style={styles.row}>
                    <label style={styles.label}>Occasion</label>
                    <select style={styles.input}
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>

                <button type="submit" style={styles.submitButton}>Reserve</button>
            </form>
            <img src={require("./assets/restaurant.jpg")} alt="Restaurant interior" style={styles.restaurantImage} />
        </div>
    );
};

const styles = {
    bookingContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "4vw",
    },
    form: {
        width: "50%",
        height: "60vh",
        margin: "8vh auto",
        paddingTop: "4vh",
        paddingBottom: "4vh",
        paddingLeft: "10vw",
        paddingRight: "4vw",
        display: "grid",
        maxWidth: "70%",
        textAlign: "left",
        alignItems: "center",
        gap: "auto",
        borderRadius: "0 16px 16px 0",
        boxShadow: "3px 3px 8px rgba(0,0,0,0.15)",
        fontFamily: "Karla, sans-serif",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "10px",
        alignItems: "center",
    },
    restaurantImage: {
        width: "50%",
        height: "60vh",
        objectFit: "cover",
        borderRadius: "16px 0 0 16px",
    },
    label: {
        fontSize: "1.5vw",
        fontWeight: "bold",
    },
    input: {
        width: "40%",
        height: "5vh",
        padding: "0.5vw",
        fontSize: "1.2vw",
        borderRadius: "8px",
        border: "1px solid #ccc"
    },
    submitButton: {
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
}
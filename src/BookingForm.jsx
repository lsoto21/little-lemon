import { useState } from "react";

export const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const today = new Date().toISOString().split("T")[0];

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

        if (!isFormValid) return;

        const formData = {
            date,
            time,
            guests: Number(guests),
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

    // 🔥 Validación React
    const isFormValid =
        date &&
        time &&
        guests >= 1 &&
        guests <= 10;

    return (
        <div style={styles.bookingContainer}>
            <form style={styles.form} onSubmit={handleSubmit}>

                {/* Fecha */}
                <div style={styles.row}>
                    <label htmlFor="date" style={styles.label}>Choose date</label>
                    <input
                        id="date"
                        style={styles.input}
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                    />
                </div>

                {/* Hora */}
                <div style={styles.row}>
                    <label htmlFor="time" style={styles.label}>Choose time</label>
                    <select
                        id="time"
                        style={styles.input}
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        disabled={!date}
                    >
                        <option value="">Select a time</option>
                        {timesForSelectedDate.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </div>

                {/* Guests */}
                <div style={styles.row}>
                    <label htmlFor="guests" style={styles.label}>Guests</label>
                    <input
                        id="guests"
                        style={styles.input}
                        type="number"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        required
                    />
                </div>

                {/* Occasion */}
                <div style={styles.row}>
                    <label htmlFor="occasion" style={styles.label}>Occasion</label>
                    <select
                        id="occasion"
                        style={styles.input}
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Other</option>
                    </select>
                </div>


                {/* Submit */}
                <button
                    type="submit"
                    style={{
                        ...styles.submitButton,
                        opacity: isFormValid ? 1 : 0.5,
                        cursor: isFormValid ? "pointer" : "not-allowed",
                    }}
                    disabled={!isFormValid}  // 🔥 Botón desactivado
                >
                    Reserve
                </button>

            </form>

            <img
                src={require("./assets/restaurant.jpg")}
                alt="Restaurant interior"
                style={styles.restaurantImage}
            />
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
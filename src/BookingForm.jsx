import { useState } from "react";

export const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const [availableTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ]);

    // Manejo del envío
    const handleSubmit = (e) => {
        e.preventDefault();

        const bookingData = {
            date,
            time,
            guests,
            occasion,
        };

        console.log("Reserva enviada:", bookingData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "grid",
                maxWidth: "200px",
                gap: "20px",
            }}
        >
            {/* Date */}
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            {/* Hour */}
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="">Select a time</option>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            {/* Number of Guests */}
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            {/* Ocassion */}
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            {/* Submit */}
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}
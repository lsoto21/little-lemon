/* global fetchAPI, submitAPI */

import { BookingForm } from "./BookingForm";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initializeTimes, updateTimes } from "./bookingReducer";

export const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, {}, initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const success = submitAPI(formData);

        if (success) {
            navigate("/confirmed");
        }
    };

    return (
        <div style={styles.main}>
            <h1 style={styles.title}>Book a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </div>
    );
};

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
        padding: "6vh 10vw",
        backgroundColor: "#495E57",
    },
};


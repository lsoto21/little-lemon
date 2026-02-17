import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

// Mock del dispatch y submitForm
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const availableTimesMock = {
    "2026-02-16": ["17:00", "18:00"],
};

describe("BookingForm HTML5 validation", () => {
    beforeEach(() => {
        render(
            <BookingForm
                availableTimes={availableTimesMock}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );
    });

    test("Date input has required attribute and min today", () => {
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toBeRequired();
        const today = new Date().toISOString().split("T")[0];
        expect(dateInput).toHaveAttribute("min", today);
    });

    test("Time select has required attribute and is disabled when date not selected", () => {
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toBeRequired();
        expect(timeSelect).toBeDisabled();
    });

    test("Guests input has required, min=1, max=10", () => {
        const guestsInput = screen.getByLabelText(/guests/i);
        expect(guestsInput).toBeRequired();
        expect(guestsInput).toHaveAttribute("min", "1");
        expect(guestsInput).toHaveAttribute("max", "10");
    });

    test("Occasion select has required attribute", () => {
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toBeRequired();
    });
});

describe("BookingForm React validation", () => {
    beforeEach(() => {
        render(
            <BookingForm
                availableTimes={availableTimesMock}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );
    });

    test("Submit button is disabled when form is invalid", () => {
        const submitButton = screen.getByRole("button", { name: /reserve/i });
        expect(submitButton).toBeDisabled();
    });

    test("Submit button is enabled when form is valid", () => {
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/guests/i);

        // Rellenar campos válidos
        fireEvent.change(dateInput, { target: { value: "2026-02-16" } });
        fireEvent.change(timeSelect, { target: { value: "17:00" } });
        fireEvent.change(guestsInput, { target: { value: 4 } });

        const submitButton = screen.getByRole("button", { name: /reserve/i });
        expect(submitButton).toBeEnabled();
    });

    test("Submitting calls submitForm with correct data", () => {
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);

        fireEvent.change(dateInput, { target: { value: "2026-02-16" } });
        fireEvent.change(timeSelect, { target: { value: "17:00" } });
        fireEvent.change(guestsInput, { target: { value: 3 } });
        fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

        const submitButton = screen.getByRole("button", { name: /reserve/i });
        fireEvent.click(submitButton);

        expect(mockSubmitForm).toHaveBeenCalledWith({
            date: "2026-02-16",
            time: "17:00",
            guests: 3,
            occasion: "Anniversary",
        });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: "BOOK_TIME",
            payload: { date: "2026-02-16", time: "17:00" },
        });
    });
});

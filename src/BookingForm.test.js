import { render, screen } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

describe("BookingForm static render", () => {
    test("Renders 'Choose date' label", () => {
        render(
            <BookingForm
                availableTimes={{}}
                dispatch={jest.fn()}
            />
        );

        const labelElement = screen.getByText("Choose date");
        expect(labelElement).toBeInTheDocument();
    });
});
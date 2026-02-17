import { initializeTimes, updateTimes } from "./bookingReducer";


beforeEach(() => {
    global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

describe("initializeTimes", () => {
    test("Returns available times from fetchAPI for today's date", () => {
        const result = initializeTimes();

        const today = new Date().toISOString().split("T")[0];

        expect(result[today]).toEqual(["17:00", "18:00", "19:00"]);
        expect(fetchAPI).toHaveBeenCalled();
    });
});

describe("updateTimes", () => {
    test("Returns the same state for unknown action", () => {
        const initialState = {
            "2026-02-16": ["17:00", "18:00"],
        };

        const result = updateTimes(initialState, {
            type: "UNKNOWN_ACTION",
        });

        expect(result).toEqual(initialState);
    });

    test("SELECT_DATE calls fetchAPI and updates state with selected date", () => {
        const initialState = {};

        const result = updateTimes(initialState, {
            type: "SELECT_DATE",
            payload: "2026-02-16",
        });

        expect(fetchAPI).toHaveBeenCalledWith(new Date("2026-02-16"));
        expect(result["2026-02-16"]).toEqual(["17:00", "18:00", "19:00"]);
    });

    test("BOOK_TIME removes selected time from date", () => {
        const initialState = {
            "2026-02-16": ["17:00", "18:00", "19:00"],
        };

        const result = updateTimes(initialState, {
            type: "BOOK_TIME",
            payload: { date: "2026-02-16", time: "18:00" },
        });

        expect(result["2026-02-16"]).toEqual(["17:00", "19:00"]);
    });
});

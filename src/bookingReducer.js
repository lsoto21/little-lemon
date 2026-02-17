/* global fetchAPI */

export const initializeTimes = () => {
    const today = new Date();
    const availableTimes = fetchAPI(today);

    return {
        [today.toISOString().split("T")[0]]: availableTimes,
    };
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "SELECT_DATE": {
            const date = action.payload;

            if (state[date]) return state;

            const availableTimes = fetchAPI(new Date(date));

            return {
                ...state,
                [date]: availableTimes,
            };
        }

        case "BOOK_TIME": {
            const { date, time } = action.payload;

            return {
                ...state,
                [date]: state[date].filter((t) => t !== time),
            };
        }

        default:
            return state;
    }
};

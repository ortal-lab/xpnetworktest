import produce from "immer";
import createReducer from "./utilsReducer";
const initialState = {
    users: [
        {
            id: "1",
            name: "יואב שרון",
            extraordinaryHours: "04:00",
            manualHours: "04:00",
            hours: "155:00",
            totalHours: "159:00",
        },
        {
            id: "2",
            name: "יואב שרון",
            extraordinaryHours: "04:00",
            manualHours: "04:00",
            hours: "155:00",
            totalHours: "159:00",
        },
        {
            id: "3",
            name: "יואב שרון",
            extraordinaryHours: "04:00",
            manualHours: "04:00",
            hours: "155:00",
            totalHours: "159:00",
        },
        {
            id: "4",
            name: "יואב שרון",
            extraordinaryHours: "04:00",
            manualHours: "04:00",
            hours: "155:00",
            totalHours: "159:00",
        },
        {
            id: "5",
            name: "יואב שרון",
            extraordinaryHours: "04:00",
            manualHours: "04:00",
            hours: "155:00",
            totalHours: "159:00",
        },
        {
            id: "6",
            name: "יואב שרון",
            extraordinaryHours: "04:00",
            manualHours: "04:00",
            hours: "155:00",
            totalHours: "159:00",
        },
    ],
};
const usersManger = {
    getAllUsers(state, action) {
        return state.users;
    },
};
export default produce(
    (state, action) => createReducer(state, action, usersManger),
    initialState
);

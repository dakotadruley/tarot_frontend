import { SAVE_CARD } from "../actions/cardActions";

export default function reducer(state = [], action) {
    switch(action.type) {
        case SAVE_CARD:
            return [...state, action.payload];
        default:
            return state;
    }
}
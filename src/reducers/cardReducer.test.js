import { saveCard } from "../actions/cardActions"
import reducer from "./cardReducer";

describe('card reducer', () => {
    it('handles the SAVE_CARD action', () => {
        const state = [];
        const action = saveCard({
            _id: '32619372189',
            name: 'Empress',
            number: 3,
            image: 'URL',
            descrtiption: 'Dope Queen'
        });

        const newState = reducer(state, action);

        expect(newState).toEqual([
            {
                _id: '32619372189',
                name: 'Empress',
                number: 3,
                image: 'URL',
                descrtiption: 'Dope Queen'
            }
        ]);
    });
});
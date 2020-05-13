import { SAVE_CARD, saveCard } from './cardActions.js';

describe('card actions', () => {
    it('creates a SAVE_CARD action', () => {
        const action = saveCard({
            _id: '32619372189',
            name: 'Empress',
            number: 3,
            image: 'URL',
            descrtiption: 'Dope Queen'
        });

        expect(action).toEqual({
            type: SAVE_CARD,
            payload: {
                _id: '32619372189',
                name: 'Empress',
                number: 3,
                image: 'URL',
                descrtiption: 'Dope Queen'
            }
        });
    });
});
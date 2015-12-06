import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {SET_STATE, SELECT_CARD, SCOOP_CARD} from '../src/actions.js';

import reducer from '../src/reducer';

describe('reducer', () => {
    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: SET_STATE,
            payload: {
                state: Map({
                    deck: List.of('a', 'b'),
                    table: List.of('c','d')
                })}
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            deck: ['a', 'b'],
            table: ['c','d']
        }));
    });
    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            payload:{
                state: {
                    deck: ['a', 'b'],
                    table: ['c','d']
                }
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            deck: ['a', 'b'],
            table: ['c','d']
        }));
    });
    it("handles SELECT_CARD", () => {
        const state = Map();
        const action = {
            type: SELECT_CARD,
            payload:{
                card: 1
            }
        };
        const nextState = reducer(state, action);
        expect(nextState.get('selectedCard')).to.equal(1);

    });
    it("handles SELECT_CARD", () => {
        const state = Map({cardsToScoop: List()});
        const action = {
            type: SCOOP_CARD,
            payload:{
                card: 1
            }
        };
        const nextState = reducer(state, action);
        const nextAction = {
            type: SCOOP_CARD,
            payload:{
                card: 2
            }
        };
        const nextNextState = reducer(nextState, nextAction);
        expect(nextNextState.get('cardsToScoop')).to.contain(2);

    });

});

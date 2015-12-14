import {SET_STATE, SELECT_CARD, SCOOP_CARD} from './actions.js';
import {Map} from 'immutable';

function selectCard(state, cardIndex){
    return state.set('selectedCard', cardIndex);
}

function scoopCard(state, cardIndex){
    return state.updateIn(['cardsToScoop'], 
            (list) => {
                if(list.includes(cardIndex)) {
                    return list.filter( card => card !== cardIndex);
                } else {
                    return list.push(cardIndex);
                }
            }
    );
}
export default function reducer(state=Map(), action){
    console.log(action);
    switch(action.type){
        case SET_STATE:
            return state.merge({cardsToScoop: []}, action.payload.state);
        case SELECT_CARD:
            return selectCard(state, action.payload.card);
        case SCOOP_CARD:
            return scoopCard(state, action.payload.card);
    }
    return state;
}

import {SET_STATE, SCOOP_CARD, SELECT_CARD} from './actions.js';
export function scoop(card) {
      return {
          type: SCOOP_CARD, 
          meta: {remote: false},
          payload:{
              card: card
          }
      };
}

export function selectCard(card) {
    console.log('select');
      return {
          type: SELECT_CARD, 
          meta: {remote: false},
          payload:{
              card: card
          }
      };
}

export function setState(state){
    return {
        type: SET_STATE,
        meta: {remote: false},
        payload: {
            state: state
        }
    };
}

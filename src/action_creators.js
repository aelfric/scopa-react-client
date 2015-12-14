import {SET_STATE, SCOOP_CARD, SELECT_CARD, DISCARD} from './actions.js';
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

export function discard(card){
    if(card !== null){
        return {
            type: DISCARD,
            meta: {remote: true},
            payload: {
                player: 0,
                card: card
            }
        }
    } else {
        return {
            type: "NOP",
            meta: {remote: false}
        }
    }
}

export function nextHand(){
    return {
        type: "DEAL_PLAYERS",
        meta: {remote: true},
        payload: {
            numPlayers: 2
        }
    }
}

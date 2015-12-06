import {SCOOP_CARD, SELECT_CARD} from './actions.js';
export function scoop(card) {
      return {
          type: SCOOP_CARD, 
          payload:{
              card: card
          }
      };
}

export function selectCard(card) {
    console.log('select');
      return {
          type: SELECT_CARD, 
          payload:{
              card: card
          }
      };
}


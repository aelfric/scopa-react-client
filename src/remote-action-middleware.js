import {SET_STATE} from './actions.js';

export default socket => store => next => action => {
    if(action.meta.remote){
        socket.emit('action', action);
        console.log('in middleware', action);
    }
    return next(action);
}

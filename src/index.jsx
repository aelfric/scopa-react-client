import React from 'react';
import ReactDOM from 'react-dom';
import {TableContainer} from './components/Table.jsx';
import {HandContainer} from './components/Hand.jsx';
import {createStore, applyMiddleware} from 'redux';
import {SET_STATE} from './actions.js';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState, nextHand, scoop} from './action_creators.js';
import io from 'socket.io-client';
import remoteActionMiddleware from './remote-action-middleware.js';
import {DiscardButtonContainer, NextHandButtonContainer} from './components/Buttons.jsx';

// store.dispatch({
//     type: SET_STATE,
//     payload:{
//         state: {
//             table: [
//             {face: "2", suit: "hearts"},
//             {face: "ace", suit: "spades"},
//             {face: "3", suit: "walruses"}
//             ],
//             hand: ['an axe', 'a sword'],
//             cardsToScoop: []
//         }
//     }
// });

const socket = io(`${location.protocol}//${location.hostname}:8090`);

    const createStoreWithMiddleware = applyMiddleware(
            remoteActionMiddleware(socket)
            )(createStore);
    const store = createStoreWithMiddleware(reducer);
socket.on('state', 
        state => {
            store.dispatch(setState(state));
            console.log(state);
        });

socket.emit("action", {type: "NEW_DECK"});
socket.emit("action", {type: "SHUFFLE"});
socket.emit("action", {type: "DEAL_PLAYERS", payload: {numPlayers: 2}});
socket.emit("action", {type: "DEAL_TABLE"});

ReactDOM.render(
        <Provider store={store}>
        <div className="game" id="game">
            <TableContainer />
            <HandContainer />
            <DiscardButtonContainer />
            <NextHandButtonContainer />
        </div>
        </Provider>,
        document.getElementById('app')
        );

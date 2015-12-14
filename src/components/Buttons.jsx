import React from 'react';
import * as actionCreators from '../action_creators.js';
import {connect} from 'react-redux';

export const DiscardButton = React.createClass({
    render: function(){
        return <button 
            onClick={() => this.props.discard(this.props.selectedCard)}
            disabled={this.props.hand && this.props.hand.isEmpty()}
            title="Discard selected card.">Discard</button>
    }
});

export const NextHandButton = React.createClass({
    render: function(){
        return <button 
            onClick={() => this.props.nextHand()}
            disabled={this.props.hand && !this.props.hand.isEmpty()}
            title="Discard selected card.">Next Hand</button>
    }
});

function mapStateToProps(state) {
    return {
        cards: state.getIn(['table']),
        hand: state.getIn(['players', 0, 'hand']),
        selectedCard: state.get('selectedCard'),
        cardsToScoop: state.getIn(['cardsToScoop'])
    };
}
export const DiscardButtonContainer = connect(mapStateToProps, actionCreators)(DiscardButton);
export const NextHandButtonContainer = connect(mapStateToProps, actionCreators)(NextHandButton);

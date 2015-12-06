import * as actionCreators from '../action_creators.js';
import React from 'react';
import {connect} from 'react-redux';
import {Card} from './Card.jsx';

export const Hand = React.createClass({
    getCards: function() {
        return this.props.cards || [];
    },
    render: function() {
        return <div className="table">
        {this.getCards().map(
                (entry,index)=>{
                    return (<Card selected={this.props.selectedCard === index} 
                    onClick={() => this.props.selectCard(index)}>{entry}</Card>);
                }
                )}
        </div>;
    }
})

function mapStateToProps(state) {
    return {
        cards: state.getIn(['hand']),
        selectedCard: state.get('selectedCard')
    };
}

export const HandContainer = connect(mapStateToProps, actionCreators)(Hand);


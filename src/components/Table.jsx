import * as actionCreators from '../action_creators.js';
import React from 'react';
import {connect} from 'react-redux';
import {Card} from './Card.jsx';

export const Table = React.createClass({
    getCards: function() {
        return this.props.cards || [];
    },
    render: function() {
        return <div className="table">
        {this.getCards().map( 
                (entry, index) => { 
                    console.log(entry);
                    return (<Card 
                            face={entry.get("face")} 
                            suit={entry.get("suit")} 
                            selected={this.props.selectedCards.includes(index) > 0}
                            onClick={() => this.props.scoop(index)} />);
                }
                )}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        cards: state.getIn(['table']),
        selectedCards: state.getIn(['cardsToScoop'])
    };
}

export const TableContainer = connect(mapStateToProps, actionCreators)(Table);

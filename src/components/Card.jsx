import React from 'react';

export const Card = React.createClass({
    render: function(){
        let className;
        if (this.props.selected){
            className = "card selected";
        } else {
            className = "card";
        }
        return <div className={className} onClick={() => this.props.onClick()}>
        {this.props.face} of {this.props.suit}
        </div>
    }
});

import React from 'react';

export default class DisplayItem extends React.Component<{ itemValue: string }, {}>  {

    render() {
        return <p>{this.props.itemValue}</p>;
    }
}
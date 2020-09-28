import React from 'react';

interface ItemProps { 
    itemValue : string ;
    onChange : (value: string) => void;
}
//  interface Component<Props = {}, State = {}>
export default class Item extends React.Component<ItemProps, { itemValue: string }>  {

    
    constructor(props) {
        super(props);
        this.state = { itemValue: '' };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event)  {
        this.setState({itemValue: event.target.value});
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }
    
  
    render() {
        return <div><label>item</label> 
        <input type="text"  value={this.state.itemValue} onChange={this.onChange} ></input>
     
        </div>;
    };

 
}  
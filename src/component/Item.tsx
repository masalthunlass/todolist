import React from 'react';

//  interface Component<Props = {}, State = {}>
export default class Item extends React.Component<{ itemValue: string }, { itemValue: string }>  {

    
    constructor(props) {
        super(props);
        this.state = { itemValue: '' };
      //  this.onChange = this.onChange.bind(this);
    }
    
  
    render() {
        return <div><label>item</label> 
        <input type="text"  value={this.state.itemValue}></input>
     
        </div>;
    };

 
}  
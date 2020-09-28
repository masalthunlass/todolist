import React from 'react';
import Item from './Item';
import DisplayItem from './DisplayItem';


/*const App : React.FC = () => (
    <form>
        <Item></Item> 
        <button type="submit" onClick="">ok</button>
    </form>
);*/

export default class App extends React.Component<{}, { itemValue: string }> {

    constructor(props) {
        super(props);
        this.state = { itemValue: '' };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeItem = this.onChangeItem.bind(this);
    }

    onSubmit(event) {
        this.setState({ itemValue: event.target.value });
        event.preventDefault();
    }

    onChangeItem(value) {
            this.setState({ itemValue: value });
    }

    render() {
        return (<>
        <form onSubmit={this.onSubmit}>
            <Item itemValue={this.state.itemValue} onChange={this.onChangeItem}></Item>
            <button type="submit">ok</button>
        </form>
            <DisplayItem itemValue={this.state.itemValue} ></DisplayItem></>)
    }

    /* onComponentDidUpdate() {
 
     }*/


} 

import React from 'react';
import Item from './Item';


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
    }

    onSubmit(event) {
        this.setState({ itemValue: event.target.value });
        event.preventDefault();
    }

    render() {
        return (<form onSubmit={this.onSubmit}>
            <Item itemValue={this.state.itemValue}></Item>
            <button  type="submit">ok</button>
        </form>)
    }

   /* onComponentDidUpdate() {

    }*/


} 

import React from 'react';
import Item from './Item';
import DisplayItem from './DisplayItem';
import UserManagement from './user/UserManagement';

const App : React.FC = () => {

    const [itemValue, setItemValue] = React.useState();
  

    return (<>
        <UserManagement></UserManagement>
        <br /><br />
        <form onSubmit={onSubmit(setItemValue)}>
            <Item itemValue={itemValue} onChange={onChangeItem(setItemValue)}></Item>
            <button type="submit">ok</button>
        </form>
            <DisplayItem itemValue={itemValue} ></DisplayItem></>);
}


const onChangeItem = (setItemValue) => (value) => {
    setItemValue( value );
}

const onSubmit = (setItemValue) => (event) => {
    setItemValue( event.target.value );
    event.preventDefault();
}



export default App;
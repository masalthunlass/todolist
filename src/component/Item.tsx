import React from 'react';

interface ItemProps {
    itemValue: string;
    onChange: (value: string) => void;
}

const Item: React.FC<ItemProps> = (itemProps) => {

    const [itemValue, setItemValue] = React.useState('');


    return (<div><label>item</label>
        <input type="text" value={itemValue} onChange={onChange(itemProps, setItemValue) } ></input>

    </div>);



}

const onChange = (itemProps, setItemValue) => (event) =>  {
    setItemValue( event.target.value );
    if (itemProps.onChange) {
        itemProps.onChange(event.target.value);
    }
}
export default Item;
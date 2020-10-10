import React from 'react';


const  DisplayItem: React.FC<{ itemValue: string }> = ( {itemValue}) =>  {

    return (<p>{itemValue}</p>);

}

export default  DisplayItem ;
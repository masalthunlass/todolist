import React from 'react';

interface props {
    lastname:string;
    firstname:string;
    language:string;
}

export default class UserListItem extends React.Component<props, {}> {

    render() {
        return(<>
        <div><span> {this.props.lastname}</span>
            <span>  {this.props.firstname}</span>
            <span>  {this.props.language}</span></div> 
        </>);
    }

}
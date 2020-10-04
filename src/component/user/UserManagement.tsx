
import React from 'react';
import UserList from './UserList';
import UserCreation from './UserCreation';
import User from './userModel';

interface stateParams {
    user: User
}

export default class UserManagement extends React.Component<{}, stateParams> {
    constructor(props) {
        super(props);
        this.state = { user: { lastname: '', firstname: '', language: 'none' } }
        this.onCreateUserRequest = this.onCreateUserRequest.bind(this);
    }
    onCreateUserRequest(value) {
        if (value) {
            this.state = value.user;
        }
        
    }
    render(){
        return (
        <div id="user"> 
            <UserCreation onSubmit={this.onCreateUserRequest}></UserCreation>
            <UserList user={this.state.user} ></UserList>
        </div>
        );
    }
}
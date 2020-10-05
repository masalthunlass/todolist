
import React from 'react';
import UserList from './UserList';
import UserCreation from './UserCreation';
import UserModel from './userModel';

interface stateParams {
    users: UserModel[]
}

/*export default class UserManagement extends React.Component<{}, stateParams> {
    constructor(props) {
        super(props);
        this.state = { users: [] }
        this.onCreateUserRequest = this.onCreateUserRequest.bind(this);
    }
    onCreateUserRequest(value) {
        if (value) {
            this.setState({users: [...this.state.users, value.user]});
        }
        
    }
    render(){
        return (
        <div id="user"> 
            <UserCreation onSubmit={this.onCreateUserRequest}></UserCreation>
            <UserList users={this.state.users} ></UserList>
        </div>
        );
    }
}*/

const UserManagement : React.FC = () => {
    
    const [users, setUsers] = React.useState([]);
    
    return ( <div id="user"> 
    <UserCreation onSubmit={onCreateUserRequest(users, setUsers)}></UserCreation>
    <UserList users={users} ></UserList>
</div>);
}

const onCreateUserRequest = (users, setUsers) => (value) => {
    if (value) {
        setUsers([...users, value.user]);
    }
}


export default UserManagement;
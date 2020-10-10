
import React from 'react';
import UserList from './UserList';
import UserCreation from './UserCreation';
import UserModel from './userModel';

interface stateParams {
    users: UserModel[]
}


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
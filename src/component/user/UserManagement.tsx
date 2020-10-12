
import React from 'react';
import UserList from './UserList';
import UserCreation from './UserCreation';
import UserModel from './userModel';

interface StateParams {
    users: UserModel[]
}


const UserManagement : React.FC = () => {
    
    const [users, setUsers] = React.useState([]);
    const [editableUser, setEditableUser] = React.useState();
    
    return ( <div id="user"> 
    <UserCreation onSubmit={onCreateUserRequest(users, setUsers)} editableUser={editableUser}></UserCreation>
    <UserList users={users} onRemove={handleRemove(users, setUsers)} onEdit={handleEdit(users, setEditableUser)} ></UserList>
</div>);
}

const handleRemove =  (users, setUsers) => (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
}

const handleEdit =  ( users, setEditableUser) => (id:number) => {
    const user = users.find((user)=> user.id === id);
    setEditableUser(user);
}

const onCreateUserRequest = (users, setUsers) => (value) => {
    if (value) {
        setUsers([...users, value.user]);
    }
}


export default UserManagement;
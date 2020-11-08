
import React from 'react';
import UserList from './UserList';
import UserCreation from './UserCreation';
import UserModel from './userModel';



const UserManagement : React.FC = () => {
    
    const [users, setUsers] = React.useState<UserModel[]>([]);
    const [editableUser, setEditableUser] = React.useState();

    React.useEffect(() => {
           async function getUsers() {
               const response = await fetch('resources/users.json');
               const users = await response.json();
               setUsers(users);
           };
           getUsers();
    });
    
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


const onCreateUserRequest = (users: UserModel[], setUsers) => (value) => {
    if (value) {
        if (users.find((user)=> user.id === value.user.id) !== undefined) {
            const newUsers = users.map((user) => user.id === value.user.id ? value.user : user);
            setUsers(newUsers);
        } else {
            setUsers( [...users, value.user]);
        }
    }
}


export default UserManagement;
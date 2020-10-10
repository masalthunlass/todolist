import React from 'react';
import UserListItem from './UserListItem';
import UserModel from './userModel';

interface props {
    users: UserModel[]
}


const UserList: React.FC<props> = (parameters) => {
    return (<div>
        <div id="header">
            <span> Nom </span>
            <span> Prénom </span>
            <span> Langue </span>
        </div>
        {
            parameters.users.map((user: UserModel, index) =>{
            return (
                
                <UserListItem key={index} firstname={user.firstname} lastname={user.lastname} language={user.language} />
            );
        })
        }
    </div>);
}

export default UserList;
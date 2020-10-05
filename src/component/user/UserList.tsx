import React from 'react';
import UserListItem from './UserListItem';
import UserModel from './userModel';

interface props {
    users: UserModel[]
}


const UserList: React.FC<props> = (props) => {
    return (<div>
        <div id="header">
            <span> Nom </span>
            <span> Prénom </span>
            <span> Langue </span>
        </div>
        {
            props.users.map((user: UserModel) => (
                <UserListItem firstname={user.firstname} lastname={user.lastname} language={user.language} />
            ))
        }
    </div>);
}

export default UserList;
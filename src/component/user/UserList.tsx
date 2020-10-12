import React from 'react';
import UserListItem from './UserListItem';
import UserModel from './userModel';

interface Props {
    users: UserModel[];
    onEdit: (id: number) => void;
    onRemove: (id: number) => void;
}

const UserList: React.FC<Props> = (parameters) => {
    return (<div>
        <div id="header">
            <span> Nom </span>
            <span> Prénom </span>
            <span> Langue </span>
        </div>
        {
            parameters.users.map((user: UserModel, index) => {
                return (

                    <UserListItem key={index} {...user} onEdit={parameters.onEdit} onRemove={parameters.onRemove} />
                );
            })
        }
    </div>);
}

export default UserList;
import React from 'react';
import UserModel from './userModel';


 const UserListItem: React.FC<UserModel> = ( {lastname, firstname, language } ) => {
    return (
        <div><span> {lastname}</span>
            <span>  {firstname}</span>
            <span>  {language}</span></div>
    );
}

export default UserListItem;
import React from 'react';
import UserModel from './userModel';

type UserLisetItemProps = UserModel & { onEdit: (id:number)=> void, onRemove: (id:number) => void};

 const UserListItem: React.FC<UserLisetItemProps> = ( {id, lastname, firstname, language, onEdit, onRemove  } ) => {
    return (
        <div><span> {lastname}</span>
            <span>  {firstname}</span>
            <span>  {language}</span>
            <span><button id="edit" onClick={() => onEdit(id)}>éditer</button></span>
            <span><button id="supp" onClick={() => onRemove(id)} >supprimer</button></span></div>
    );
}




export default UserListItem;
import { Action } from "redux";
import UserModel from "../../component/user/userModel";

export type UserActionTypes = 'ADD_USER' | 'REMOVE_USER' | 'EDIT_USER';
export type UserActions = {
    user: UserModel,
} & Action<UserActionTypes>;


const addUser = (user: UserModel): UserActions => ({
    type: 'ADD_USER',
    user
});

const removeUser = (user: UserModel): UserActions => ({
    type: 'REMOVE_USER',
    user
});

const editUser = (user: UserModel): UserActions => ({
    type: 'EDIT_USER',
    user
});


export default  {editUser, addUser, removeUser };

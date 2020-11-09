import { Action } from "redux";
import UserModel from "../component/user/userModel";

export type UserActionTypes = 'ADD_USER' | 'REMOVE_USER';
export type UserActions = {
    user: UserModel,
} & Action<UserActionTypes>;
const addUser = (user: UserModel): UserActions => ({
    type: 'ADD_USER',
    user
});

export type TodoActionTypes = 'ADD_TO_DO';

export type TodoActions = {
    todo: string,
} & Action<TodoActionTypes>;

const addTodo = (todo: string): TodoActions => ({
    type: 'ADD_TO_DO',
    todo
});

export default  {addTodo };

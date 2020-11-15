import { Reducer } from 'redux';
import UserModel from '../../component/user/userModel';
import {  UserActions } from '../action/userActions';


const initialState = { todos: [], users: [] };

export const userReducer: Reducer<UserModel[], UserActions> = (state = initialState.users, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];
       /* case 'REMOVE_USER':
            return state.filter((user) => user.id !== action.user.id);*/
    }
    return state;
};


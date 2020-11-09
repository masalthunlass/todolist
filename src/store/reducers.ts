import { Reducer } from 'redux';
import UserModel from '../component/user/userModel';
import { TodoActions, UserActions } from './actions';

const initialState = { todos: [], users: [] };

export const userReducer: Reducer<UserModel[], UserActions> = (state = initialState.users, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return  [...state, action.user] ;
    }
    return state;
};

export const todoReducer: Reducer<string[], TodoActions> = (state = initialState.todos, action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            return  [...state, action.todo];
        default:
            return state;
    }
};


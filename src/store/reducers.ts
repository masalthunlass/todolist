import { Reducer } from 'redux';
import { TodoActions } from './actions';
import { AppState } from './store';

//not used
/*const userReducer: Reducer<AppState, UserActions> = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.user] };
    }
    return state;
};*/
const initialState = { todos: [] };
const todoReducer: Reducer<AppState, TodoActions> = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            return { ...state, todos: [...state.todos, action.todo] };
        default:
            return state;
    }
};

export default todoReducer;
import { Reducer } from 'redux';
import { TodoAction } from '../action/todoListActions';

const initialState = { todos: [], users: [] };

export const todoReducer: Reducer<string[], TodoAction> = (state = initialState.todos, action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            return [...state, action.todo];
        case 'INIT_TO_DO_LIST':
            return action.todos
        default:
            return state;
    }
};


export const fetchTodos = () => async (dispatch, getState) => {
    const response = await fetch('resources/myTodoList.json');
    const todos = await response.json();
    dispatch({ type: 'INIT_TO_DO_LIST', todos: todos });
}


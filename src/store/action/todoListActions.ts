import { Action } from "redux";


export type TodoActionTypes = 'ADD_TO_DO' | 'INIT_TO_DO_LIST';

export type AddTodoAction = {
    todo: string
} & Action<'ADD_TO_DO'>;

export type ListTodoAction = {
    todos: string[]
} & Action<'INIT_TO_DO_LIST'>;

export type TodoAction = AddTodoAction | ListTodoAction;

const addTodo = (todo: string): AddTodoAction => ({
    type: 'ADD_TO_DO',
    todo
});

const fetchTodos = (): ListTodoAction => ({
    type: 'INIT_TO_DO_LIST',
    todos: []
});

export default  {addTodo, fetchTodos};

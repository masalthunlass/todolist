import { AddTodoAction } from '../action/todoListActions';
import {todoReducer} from './todoReducer';

test('when ADD_TO_DO add a todo', () => {
    const state = [];
    const action: AddTodoAction = {todo : 'quelque chose', type : 'ADD_TO_DO' }; 
    const updatedState = todoReducer(state, action);
    expect(updatedState).toStrictEqual(['quelque chose']);
});


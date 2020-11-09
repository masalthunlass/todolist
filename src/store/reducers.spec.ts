import { TodoActions } from './actions';
import {todoReducer} from './reducers';

test('when ADD_TO_DO add a todo', () => {
    const state = [];
    const action: TodoActions = {todo : 'quelque chose', type : 'ADD_TO_DO' }; 
    const updatedState = todoReducer(state, action);
    expect(updatedState).toStrictEqual(['quelque cose']);
});
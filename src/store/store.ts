import {userReducer, todoReducer} from './reducers';
import { AnyAction, combineReducers, createStore, Store } from 'redux';
import UserModel from '../component/user/userModel';

export type AppState = {todos: string[], users: UserModel[]};
const rootReducer = combineReducers({todos: todoReducer, users: userReducer})
const store: Store<AppState, AnyAction> = createStore(rootReducer);

export default store;


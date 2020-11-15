import {userReducer} from './reducer/userReducer';
import {todoReducer} from './reducer/todoReducer';
import { AnyAction, combineReducers, createStore, Store, applyMiddleware  } from 'redux';
import UserModel from '../component/user/userModel';
import thunkMiddleware from 'redux-thunk'

export type AppState = {todos: string[], users: UserModel[]};
const rootReducer = combineReducers({todos: todoReducer, users: userReducer})
const store: Store<AppState, AnyAction> = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;


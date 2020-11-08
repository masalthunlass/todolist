import rootReducer from './reducers';
import { AnyAction, createStore, Store } from 'redux';

export type AppState = {todos: string[]};

const store: Store<AppState, AnyAction> = createStore(rootReducer);

export default store;


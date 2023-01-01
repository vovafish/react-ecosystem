import { configureStore, combineReducer } from "redux";

const reducers = {};

const rootReducer = combineReducer(reducers);

export const createStore = () => configureStore(rootReducer);

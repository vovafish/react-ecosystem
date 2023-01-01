import { configureStore, combineReducer } from "redux";
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const rootReducer = combineReducer(reducers);

export const createStore = () => configureStore(rootReducer);

import { combineReducers, createStore } from "redux";
import students from "./reducers/students";

const allReducers = combineReducers({ students });
const store = createStore(allReducers);

export default store;
import { combineReducers, createStore } from "redux";
import students from "./reducers/student";

const allReducers = combineReducers({ students });
const store = createStore(allReducers);

export default store;
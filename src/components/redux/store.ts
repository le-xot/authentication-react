import { createStore } from "redux";
import { AppState } from "./types";
import counterReducer from "./reducers";
import { AppAction } from "./actions";

const store = createStore<AppState, AppAction, {}, {}>(counterReducer);

export default store;

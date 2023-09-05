import { AppAction, DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actions";
import { AppState } from "./types";

const initialState: AppState = {
  counter: 0,
};

const counterReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface IncrementAction {
  type: typeof INCREMENT_COUNTER;
}

export interface DecrementAction {
  type: typeof DECREMENT_COUNTER;
}

export type AppAction = IncrementAction | DecrementAction;

export const incrementCounter = (): IncrementAction => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = (): DecrementAction => ({
  type: DECREMENT_COUNTER,
});

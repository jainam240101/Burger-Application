/** @format */

import { INCREMENT,DECREMENT } from "../actions/types.js";

const initialstate = {
  counter: 0,
};

const CounterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter -1,
      };
    default:
      return state;
  }
};

export default CounterReducer;

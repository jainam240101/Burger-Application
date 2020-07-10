/** @format */

import { INCREMENT, DECREMENT } from "./types";

export const Increment = () => (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};
export const Decrement = () => (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};

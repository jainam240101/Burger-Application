/** @format */

import { combineReducers } from "redux";
import CounterReducer from "./counter";
import PostsReduers from "./postsinfo";

const store = combineReducers({
  posts: PostsReduers,
  counter: CounterReducer,
});

export default store;

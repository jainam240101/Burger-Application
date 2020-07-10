/** @format */

import { POSTS } from "../actions/types";

const initialstate = {
  posts: {},
};

const PostsReduers = (state = initialstate, actions) => {
  switch (actions.type) {
    case POSTS:
      return {
        ...state,
        posts: actions.data,
      };
    default:
      return state;
  }
};

export default PostsReduers;

import { POSTS } from "./types"

export const fetchposts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) =>
        dispatch({
          type: POSTS,
          data: posts,
        })
      );
}


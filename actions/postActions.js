import { FETCH_POST } from "./types";

export const fetchPost = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POST,
        payload: posts,
      })
    );
};

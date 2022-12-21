import * as api from "../components/api";

// action creator

export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    console.log('vivek', data);
    dispatch({ type: 'FETCH_ALL', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

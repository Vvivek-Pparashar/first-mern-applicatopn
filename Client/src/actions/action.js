import * as api from "../components/api";

// action creator

export const getPosts = () => async(dispatch)=>{
  try {
        const data =  await api.fetchPosts();
  } catch (error) {
        console.log(error)
  }
};

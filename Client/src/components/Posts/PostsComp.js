import React from "react";
import { useSelector } from "react-redux";
import PostComp from "./Post/PostComp";

const PostsComp = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts)
  return (
    <div>
      PostsComp
      <PostComp />
    </div>
  );
};

export default PostsComp;

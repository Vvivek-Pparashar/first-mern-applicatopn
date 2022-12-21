import React from "react";
import { useSelector } from "react-redux";
import { Spin, Row, Col } from "antd";
import PostComp from "./Post/PostComp";

const PostsComp = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return !posts.length ? (
    <Spin
      style={{
        marginTop: "50px",
        marginLeft: "50%",
        transform: "translateX(-50%)",
      }}
    />
  ) : (
    <Row gutter={16}>
      {posts.map((post) => (
        <Col key={post._id} span={9} offset={2}>
          <PostComp post={post} />
        </Col>
      ))}
    </Row>
  );
};

export default PostsComp;

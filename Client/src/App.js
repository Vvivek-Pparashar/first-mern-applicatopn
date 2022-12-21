import React, { useEffect } from "react";
import { Col, Row, Layout } from "antd";
import HeaderComp from "./components/Header/HeaderComp";
import FormComp from "./components/Forms/FormComp";
import PostsComp from "./components/Posts/PostsComp";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/action";

const { Content } = Layout;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <Layout>
      <HeaderComp />
      <Content>
        <Row style={{ width: "98.5vw", position:"relative" }}>
          <Col span={16} style={{ height: "100%", minHeight:"100vh", padding:"40px 0" }}>
            <PostsComp />
          </Col>
          <Col span={8} style={{ height: "30vw", position:"sticky", top:"90px" }}>
            <FormComp />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;

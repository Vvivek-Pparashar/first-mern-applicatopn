import React, { useEffect } from "react";
import { Space, Typography, Grid, Col, Divider, Row, Layout } from "antd";
import HeaderComp from "./components/Header/HeaderComp";
import FormComp from "./components/Forms/FormComp";
import PostsComp from "./components/Posts/PostsComp";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/action";

const { Title } = Typography;
const { Content, Footer } = Layout;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <Layout>
      <HeaderComp />
      <Content>
        <Row style={{ width: "100vw", backgroundColor: "bisque" }}>
          <Col span={16} style={{ backgroundColor: "wheat", height: "30vw" }}>
            <PostsComp />
          </Col>
          <Col span={8} style={{ backgroundColor: "grey", height: "30vw" }}>
            <FormComp />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        StarVest ©2022 Created by Vivek Parashar IND
      </Footer>
    </Layout>
  );
};

export default App;

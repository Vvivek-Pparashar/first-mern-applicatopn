import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
const PostComp = ({ post }) => (
  <Card
    style={{
      width: "100%",
    }}
    cover={
      <img
        alt="example"
        src={post.file}
        style={{ width: "100%", height: "105px", padding:"0 20px" }}
      />
    }
    actions={[
      <DeleteOutlined key="delete" />,
      <EditOutlined key="edit" />,
    ]}
  >
    <Meta
      title={post.company_name}
      description={
        post.details.length > 200
          ? post.details.slice(0, 250) + ` Read More...`
          : post.details + ` Read More...`
      }
    />

    <a href={post.website} target="_blank" rel="noopener noreferrer">
      <p>visit {post.company_name}</p>
    </a>
  </Card>
);
export default PostComp;

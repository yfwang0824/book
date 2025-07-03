import React from "react";
import { Typography, List } from "antd";
const { Title, Paragraph } = Typography;

export default function TopicDetail({ topic }) {
  return (
    <div>
      <Title level={3}>{topic.title}</Title>
      {topic.points && (
        <>
          <Title level={5}>主要内容</Title>
          <List
            dataSource={topic.points}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </>
      )}
      {topic.targets && (
        <>
          <Title level={5}>能力目标</Title>
          <List
            dataSource={topic.targets}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </>
      )}
    </div>
  );
}

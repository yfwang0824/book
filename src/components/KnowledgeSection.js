import React, { useEffect, useState } from "react";
import { Layout, Spin, Button } from "antd";
import KnowledgeTree from "./KnowledgeTree";
import KnowledgeGraph from "./KnowledgeGraph";
import TopicDetail from "./TopicDetail";
import axios from "axios";

const { Content, Sider } = Layout;

export default function KnowledgeSection() {
  const [data, setData] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/knowledge").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Spin size="large" />
    </div>
  );

  return (
    <Layout
      style={{
        height: "100vh-72px", // 重点1：KnowledgeSection固定高度
        // minHeight: 700,
        maxWidth: 1400,
        margin: "10",
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 4px 24px 0 rgba(61,89,137,0.09)"
      }}>
      <Sider 
        width={320} 
        style={{ 
            background: "#16213c", 
            color: "#e9f3ff", 
            borderRadius: "20px 0 0 20px", 
            padding: 20,
            height: "85vh",      // 重点2：Sider固定高度
          overflowY: "auto",    // 重点3：溢出时上下滚动
          }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#6ac3fa" }}>课程结构</div>
        <KnowledgeTree data={data} onSelect={setSelectedTopic} />
      </Sider>
      <Content style={{ 
        padding: 36, 
        background: "#fff", 
        borderRadius: "0 20px 20px 0",
        minHeight: "85vh",    // 让内容区也填满
        overflowY: "auto"
        }}>
        {selectedTopic ? (
          <div>
            <Button
              type="link"
              style={{ marginBottom: 24, fontWeight: 600, fontSize: 16, color: "#245edb" }}
              onClick={() => setSelectedTopic(null)}
            >
              ← 返回知识图谱
            </Button>
            <TopicDetail topic={selectedTopic} />
          </div>
        ) : (
          <KnowledgeGraph data={data} onNodeClick={setSelectedTopic} />
        )}
      </Content>
    </Layout>
  );
}
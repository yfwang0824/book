// import React, { useEffect, useState } from "react";
// import { Layout, Button } from "antd";
// import KnowledgeTree from "./components/KnowledgeTree";
// import KnowledgeGraph from "./components/KnowledgeGraph";
// import TopicDetail from "./components/TopicDetail";
// import axios from "axios";

// const { Header, Content, Sider } = Layout;

// function App() {
//   const [data, setData] = useState([]);
//   const [selectedTopic, setSelectedTopic] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("/api/knowledge").then((res) => {
//       setData(res.data);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Header style={{
//         color: "#fff",
//         fontSize: 22,
//         display: "flex",
//         alignItems: "center",
//         background: "#12223A"
//       }}>
//         <span style={{ flex: "none" }}>
//           电动汽车智能控制理论与方法 知识图谱
//         </span>
//         {selectedTopic && (
//           <Button
//             type="primary"
//             onClick={() => setSelectedTopic(null)}
//             style={{
//               marginLeft: 24,
//               background: "#3498db",
//               borderColor: "#3498db"
//             }}
//           >
//             返回知识图谱
//           </Button>
//         )}
//       </Header>
//       <Layout>
//         <Sider width={300} style={{ background: "#fff", padding: 16 }}>
//           <KnowledgeTree data={data} onSelect={setSelectedTopic} />
//         </Sider>
//         <Content style={{ margin: 24, background: "#fff", padding: 24 }}>
//           {selectedTopic ? (
//             <TopicDetail topic={selectedTopic} />
//           ) : (
//             <KnowledgeGraph data={data} onNodeClick={setSelectedTopic} />
//           )}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;

import React from "react";
import KnowledgeSection from "./components/KnowledgeSection";
import WebServiceSection from "./components/WebServiceSection";

function App() {
  return (
    <div style={{ fontFamily: "NioSans, 'Segoe UI', '微软雅黑', Arial, sans-serif", background: "#f5f8fb" }}>
      {/* 顶部导航 */}
      <header
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          height: 72,
          background: "linear-gradient(90deg,#0e2746 60%,#375a8c)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 24,
          letterSpacing: "0.05em",
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.06)"
        }}>
        <div style={{ marginLeft: 40, fontFamily: "NioSans, 'Segoe UI', Arial, sans-serif", fontSize: 30, fontWeight: 900, letterSpacing: "0.08em" }}>
          <span style={{ color: "#6ac3fa" }}>电动汽车智能控制理论与方法</span>
        </div>
        <nav style={{ marginLeft: "auto", marginRight: 50, display: "flex", gap: 40 }}>
          <a href="#knowledge-section" style={navLinkStyle}>知识图谱</a>
          <a href="#web-service-section" style={navLinkStyle}>智能问答</a>
        </nav>
      </header>

      {/* 内容分区 */}
      <main style={{ marginTop: 72 }}>
        <section id="knowledge-section" style={sectionStyle}>
          <KnowledgeSection />
        </section>
        {/* <section id="web-service-section" style={sectionStyleWhite}>
          <WebServiceSection />
        </section> */}
      </main>
    </div>
  );
}

// 导航链接美化
const navLinkStyle = {
  color: "#b6cdf7",
  fontWeight: 600,
  textDecoration: "none",
  fontSize: 18,
  transition: "color .2s",
  padding: "8px 0",
  borderBottom: "2px solid transparent",
};

// sectionStyle.navLinkActive = { color: "#6ac3fa", borderBottom: "2px solid #6ac3fa" };

// 板块整体样式
const sectionStyle = {
  minHeight: "100vh",
  background: "linear-gradient(180deg,#f5f8fb 80%,#dde8f4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px 0"
};
const sectionStyleWhite = { ...sectionStyle, background: "#fff" };

export default App;



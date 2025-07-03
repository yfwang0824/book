import React, { useEffect } from "react";

export default function WebServiceSection() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://agent.tongji.edu.cn/resources/product/llm/public/sdk/embedLite.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      if (window.HiagentWebSDK && window.HiagentWebSDK.WebClient) {
        new window.HiagentWebSDK.WebClient({
          appKey: "ctja21o2bq5h1luoqsog",
          baseUrl: "https://agent.tongji.edu.cn"
        });
      }
    };
    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        fontSize: 30,
        fontWeight: 700,
        color: "#293c5b",
        marginBottom: 32,
        letterSpacing: "0.04em"
      }}>智能问答中心</div>
      {/* 这里 script 挂载自己的UI */}
      <div id="hiagent-web-client-container" />
    </div>
  );
}

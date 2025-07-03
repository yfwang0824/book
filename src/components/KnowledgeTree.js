// import React from "react";
// import { Tree } from "antd";

// function buildTreeData(data) {
//   return data.map((module, idx) => ({
//     title: module.module,
//     key: `m-${idx}`,
//     children: module.topics.map((t, tidx) => ({
//       title: t.title,
//       key: `t-${idx}-${tidx}`,
//       isLeaf: true,
//       topic: t,
//       module: module.module,
//     })),
//   }));
// }

// export default function KnowledgeTree({ data, onSelect }) {
//   const treeData = buildTreeData(data);

//   return (
//     <Tree
//       treeData={treeData}
//       onSelect={(keys, info) => {
//         if (info.node.isLeaf) onSelect({ ...info.node.topic, module: info.node.module });
//       }}
//       defaultExpandAll
//     />
//   );
// }

import React from "react";
import { Tree } from "antd";

// function buildTreeData(data) {
//   return data.map((module, idx) => ({
//     title: module.module,
//     key: `m-${idx}`,
//     children: module.topics.map((t, tidx) => ({
//       title: t.title,
//       key: `t-${idx}-${tidx}`,
//       isLeaf: true,
//       topic: t,
//       module: module.module,
//     })),
//   }));
// }

function buildTreeData(data) {
  return data.map((module, idx) => ({
    // 模块标题加粗
    title: <span style={{ fontSize: 15, fontWeight: 700, color: "#000" }}>{module.module}</span>,
    key: `m-${idx}`,
    children: module.topics.map((t, tidx) => ({
      // 知识点正常字体
      title: <span style={{ fontSize: 13, fontWeight: 500, color: "#222" }}>{t.title}</span>,
      key: `t-${idx}-${tidx}`,
      isLeaf: true,
      topic: t,
      module: module.module,
    })),
  }));
}

export default function KnowledgeTree({ data, onSelect }) {
  const treeData = buildTreeData(data);

  return (
    <div
      style={{
        fontFamily: "NioSans, 'Segoe UI', '微软雅黑', Arial, sans-serif",
        fontSize: 16,           // 字体大小
        color: "#e0edff",       // 字体颜色（可根据你的背景色调整）
        lineHeight: 2.1,        // 行高
        fontWeight: 500,        // 字重
        letterSpacing: "0.01em"
      }}
    >
      <Tree
        treeData={treeData}
        onSelect={(keys, info) => {
          if (info.node.isLeaf) onSelect({ ...info.node.topic, module: info.node.module });
        }}
        defaultExpandAll
        showLine
        style={{
          background: "none",   // 不要背景色
          color: "inherit"      // 使用外层颜色
        }}
        // 可以加 showIcon，定制 icon
      />
    </div>
  );
}


// import React, { useEffect, useRef } from "react";
// import ReactECharts from "echarts-for-react";

// export default function KnowledgeGraph({ data, onNodeClick }) {
//   // 转换为echarts节点/边
//   let nodes = [];
//   let links = [];

//   data.forEach((mod, i) => {
//     nodes.push({ id: `mod${i}`, name: mod.module, category: 0, symbolSize: 60 });
//     mod.topics.forEach((t, j) => {
//       nodes.push({ id: `topic${i}_${j}`, name: t.title, category: 1, symbolSize: 40 });
//       links.push({ source: `mod${i}`, target: `topic${i}_${j}` });
//     });
//   });

//   const option = {
//     title: { text: "知识图谱", left: "center" },
//     tooltip: {},
//     legend: [
//       { data: ["模块", "知识点"], top: 30 }
//     ],
//     series: [
//       {
//         type: "graph",
//         layout: "force",
//         data: nodes,
//         links: links,
//         categories: [{ name: "模块" }, { name: "知识点" }],
//         roam: true,
//         label: { show: true },
//         force: { repulsion: 200, edgeLength: [80, 120] },
//         emphasis: { focus: "adjacency" }
//       }
//     ]
//   };

//   return (
//     <ReactECharts
//       option={option}
//       style={{ height: "80vh" }}
//       onEvents={{
//         click: (params) => {
//           if (params.data && params.data.category === 1) {
//             // 找到对应知识点
//             let [mi, tj] = params.data.id.match(/\d+/g);
//             onNodeClick(data[mi].topics[tj]);
//           }
//         }
//       }}
//     />
//   );
// }

import React, { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";

const mainBlue = "#2264a9";
const lightBlue = "#b8cdfa";
const lightLine = "#b3c7e6";
const labelColor = "#223";

export default function KnowledgeGraph({ data, onNodeClick }) {
  // 转换为echarts节点/边
  let nodes = [];
  let links = [];

  data.forEach((mod, i) => {
  nodes.push({
    id: `mod${i}`,
    name: mod.module,
    category: 0,
    symbolSize: 60,
    itemStyle: { color: mainBlue },
    label: { color: labelColor, fontWeight: "bold", fontSize: 15 }
  });
  mod.topics.forEach((t, j) => {
    nodes.push({
      id: `topic${i}_${j}`,
      name: t.title,
      category: 1,
      symbolSize: 38,
      itemStyle: { color: lightBlue },
      label: { color: labelColor, fontWeight: 500, fontSize: 12 }
    });
    links.push({
      source: `mod${i}`,
      target: `topic${i}_${j}`,
      lineStyle: { color: lightLine, width: 2 }
    });
  });
});

  const option = {
    title: { text: "知识图谱", left: "center", top: 10, textStyle: { color: mainBlue, fontWeight: 700, fontSize: 22 }},
    tooltip: {},
    legend: [
      { data: ["模块", "知识点"], top: 36, left: "center", textStyle: { color: "#5d7296", fontSize: 16 } }
    ],
    series: [
      {
        type: "graph",
        layout: "force",
        data: nodes,
        links: links,
        categories: [
          { name: "模块", itemStyle: { color: mainBlue } },
          { name: "知识点", itemStyle: { color: lightBlue } }
        ],
        roam: true,
        label: { show: true },
        force: { repulsion: 200, edgeLength: [90, 150] },
        emphasis: { focus: "adjacency" },
        lineStyle: { color: lightLine, opacity: 0.85 }
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "80vh" }}
      onEvents={{
        click: (params) => {
          if (params.data && params.data.category === 1) {
            // 找到对应知识点
            let [mi, tj] = params.data.id.match(/\d+/g);
            onNodeClick(data[mi].topics[tj]);
          }
        }
      }}
    />
  );
}

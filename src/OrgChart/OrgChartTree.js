import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import BahriddinNodes from "../OrgChart/CustomNodes/BahriddinNode";
import EldorNodes from "../OrgChart/CustomNodes/EldorNodes";
import OtabekNodes from "../OrgChart/CustomNodes/OtabekNodes";
import HusanNodes from "../OrgChart/CustomNodes/HusanNodes";
import OybekNodes from "../OrgChart/CustomNodes/OybekNodes";

const elements = [
  {
    id: "1",
    type: "bahriddin",
    position: { x: 550, y: 20 },
    data: { text: "Bahriddin Abdiev" },
  },
  {
    id: "2",
    type: "eldor",
    position: { x: 100, y: 250 },
    data: { text: "Eldor Ergashov" },
  },
  {
    id: "3",
    type: "otabek",
    data: { text: "Otabek Kadirov" },
    position: { x: 400, y: 250 },
  },
  {
    id: "4",
    type: "husan",
    data: { text: "Husan Eshonqulov" },
    position: { x: 700, y: 250 },
  },
  {
    id: "5",
    type: "oybek",
    data: { text: "Oybek Turaev" },
    position: { x: 1000, y: 250 },
  },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e1-5", source: "1", target: "5" },
];

const nodeTypes = {
  bahriddin: BahriddinNodes,
  eldor: EldorNodes,
  otabek: OtabekNodes,
  husan: HusanNodes,
  oybek: OybekNodes,
};

export const Tree = () => {
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} defaultZoom={1.5}>
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
};

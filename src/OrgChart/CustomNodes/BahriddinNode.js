import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import bahriddin from "../images/bahriddin.png";
import "../OrgChart.css";

// const customNodeStyles = {
//   color: "#000",
//   padding: 10,
//   border: "1px solid #999",
//   borderRadius: "5px",
//   width: 200,
// };

export default memo(({ data }) => {
  return (
    <div className={"branch-box"}>
      <div>
        <img className={"image"} src={bahriddin} alt={"bahriddin"} />
      </div>
      <div>{data.text}</div>
      <Handle type="source" position="bottom" />
    </div>
  );
});

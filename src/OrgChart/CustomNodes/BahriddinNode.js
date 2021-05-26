import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import bahriddin from "../images/bahriddin.png";
import "../OrgChart.css";

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

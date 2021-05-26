import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import eldor from "../images/eldor.png";
import "../OrgChart.css";

export default memo(({ data }) => {
  return (
    <div className={"branch-box"}>
      <div>
        <img className={"image"} src={eldor} alt={"eldor"} />
      </div>
      <div>{data.text}</div>
      <Handle type="target" position="top" />
    </div>
  );
});

import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import husan from "../images/husan.png";
import "../OrgChart.css";

export default memo(({ data }) => {
  return (
    <div className={"branch-box"} /*style={customNodeStyles}*/>
      <div>
        <img className={"image"} src={husan} alt={"husan"} />
      </div>
      <div>{data.text}</div>
      <Handle type="target" position="top" />
    </div>
  );
});

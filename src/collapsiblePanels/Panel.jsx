import { easeSin } from "d3";
import React from "react";
import { useId } from "react";
import { useState } from "react";

function Panel({ panelData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const id = useId();
  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid grey",
        boxSizing: "border-box",
      }}
    >
      <h5
        id={id}
        style={{
          width: "600px",
          padding: "10px 20px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {panelData.header}
      </h5>
      <div
        aria-controls={id}
        aria-describedby={id}
        hidden={!isExpanded}
        style={{
          height: "max-content",
          padding: "10px 20px",
        }}
      >
        {panelData.description}
      </div>
    </div>
  );
}

export default Panel;

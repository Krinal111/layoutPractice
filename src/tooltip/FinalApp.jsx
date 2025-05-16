import React from "react";
import ToolTipWithTag from "./ToolTipWithTag";

function FinalApp() {
  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <ToolTipWithTag />
      </div>
      <div>
        <ToolTipWithTag />
      </div>
      <div>
        <ToolTipWithTag />
      </div>
    </div>
  );
}

export default FinalApp;

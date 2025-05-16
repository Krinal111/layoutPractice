import React from "react";
import Panel from "./Panel";

function PanelGroup() {
  const data = [
    { header: "Panel 1", description: "This is panel 1 description" },
    { header: "Panel 2", description: "This is panel 2 description" },
    { header: "Panel 3", description: "This is panel 3 description" },
  ];
  return (
    <>
      <div
        style={{
          width: "80vw",
          height: "max-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
          marginTop: "100px",
        }}
      >
        {data.map((item, index) => (
          <Panel key={index} panelData={item} />
        ))}
      </div>
    </>
  );
}

export default PanelGroup;

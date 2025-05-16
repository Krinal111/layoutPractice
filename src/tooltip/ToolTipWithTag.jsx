import React from "react";
import ElementToShowTooltip from "./ElementToShowTooltip";
import Tooltip from "./Tooltip";
import { useState } from "react";

function ToolTipWithTag() {
  const [hover, setHover] = useState(false);
  const [positions, setPosition] = useState({
    top: 0,
    bottom: 0,
    width: 0,
  });

  return (
    <Tooltip positions={positions} hover={hover}>
      <ElementToShowTooltip setPosition={setPosition} setHover={setHover} />
    </Tooltip>
  );
}

export default ToolTipWithTag;

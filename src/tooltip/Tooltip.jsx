import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";

function Tooltip({ children, positions, hover }) {
  const tooltipRef = useRef(null);

  useLayoutEffect(() => {
    if (hover) {
      if (tooltipRef.current.offsetHeight > positions.top) {
        console.log(tooltipRef.current.offsetHeight, positions.top);
        tooltipRef.current.style.top =
          tooltipRef.current.offsetHeight + positions.top + positions.height;
      } else {
        tooltipRef.current.style.top = `${-tooltipRef.current.offsetHeight}px`;
      }
    }
  }, [hover]);

  return (
    <>
      <div style={{ position: "relative" }}>
        {children}
        {hover && (
          <div
            ref={tooltipRef}
            style={{
              position: "absolute",
              backgroundColor: "lightYellow",
              color: "#000",
              padding: "2px 10px",
              border: "1px solid #000",
              maxWidth: `${positions.width * 2}px`,
              width: "max-content",
            }}
          >
            this is tooltip
          </div>
        )}
      </div>

      {/* {console.log(positions)} */}
    </>
  );
}

export default Tooltip;

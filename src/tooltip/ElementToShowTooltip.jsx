import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";

function ElementToShowTooltip({ setPosition, setHover }) {
  const tagRef = useRef(null);

  useLayoutEffect(() => {
    const { top, bottom, width, height } =
      tagRef.current.getBoundingClientRect();
    setPosition({
      top: Math.round(top),
      bottom: Math.round(bottom),
      width: Math.round(width),
      height: Math.round(height),
    });
  }, []);

  return (
    <>
      <button
        ref={tagRef}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        Hover me
      </button>
    </>
  );
}

export default ElementToShowTooltip;

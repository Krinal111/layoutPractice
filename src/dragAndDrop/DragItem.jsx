import React, { useLayoutEffect, useRef, useState } from "react";

function DragItem() {
  const dragItemRef = useRef(null);
  const dropContainerRef = useRef(null);
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [rect, setRect] = useState({ height: 0, width: 0 });

  useLayoutEffect(() => {
    console.log(dropContainerRef);
    setRect({
      height: dropContainerRef.current.clientHeight,
      width: dropContainerRef.current.clientWidth,
    });
  }, []);

  useLayoutEffect(() => {
    if (positions.x < rect.width && positions.y < rect.height) {
      dragItemRef.current.style.transform = `translate(${positions.x}px,${positions.y}px)`;
    }
  }, [positions.x, positions.y]);

  function handleDragStart(e) {
    setPositions({ x: e.clientX, y: e.clientY });
  }

  return (
    <>
      <div
        ref={dropContainerRef}
        onDragOver={(e) => e.preventDefault()}
        style={{
          boxSizing: "border-box",
          height: "90vh",
          width: "100%",
          marginBottom: "20px",
          border: "1px solid #fff",
        }}
      >
        <div
          draggable={true}
          ref={dragItemRef}
          onDragEndCapture={handleDragStart}
          style={{
            width: "150px",
            marginBottom: "20px",
            height: "150px",
            border: "1px solid #fff",
            backgroundColor: "yellow",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          DragItem
        </div>
      </div>
    </>
  );
}

export default DragItem;

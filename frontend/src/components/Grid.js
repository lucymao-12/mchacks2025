import React from "react";

const Grid = ({ rows, cols }) => {
  const onClick = (e, gridX, gridY, cols, rows) => {
    console.log(`Grid cell clicked: (${gridX}, ${gridY})`);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        pointerEvents: "none", // Prevent grid from blocking map image clicks
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => {
        const gridX = index % cols; // Column index
        const gridY = Math.floor(index / cols); // Row index
        return (
          <div
            key={index}
            onClick={(e) => onClick(e, gridX, gridY, cols, rows)}
            style={{
              border: "1px solid rgba(0, 0, 0, 0.2)",
              pointerEvents: "auto", // Allow grid cells to be clicked
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Grid;

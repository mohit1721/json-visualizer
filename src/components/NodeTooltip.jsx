import React, { useEffect, useState } from "react";

function NodeTooltip({ pos, data, visible }) {
  const [tooltipPos, setTooltipPos] = useState(pos);

  useEffect(() => {
    const timeout = setTimeout(() => setTooltipPos(pos), 16); // ~60fps
    return () => clearTimeout(timeout);
  }, [pos]);

  if (!visible || !data) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: tooltipPos.y + 8,
        left: tooltipPos.x + 8,
        background: "rgba(30,30,40,0.97)",
        color: "#fff",
        zIndex: 9999,
        padding: "0.8em 1.2em",
        borderRadius: 7,
        pointerEvents: "none",
        fontSize: "14px",
        boxShadow: "0 2px 10px rgba(0,0,0,.31)",
      }}
    >
      <div>
        <strong>Path:</strong> <code>{data.path}</code>
      </div>
      <div>
        <strong>Value:</strong>{" "}
        <code>
          {typeof data.value === "object"
            ? JSON.stringify(data.value)
            : String(data.value)}
        </code>
      </div>
    </div>
  );
}

export default NodeTooltip;

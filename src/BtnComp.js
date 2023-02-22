import React from "react";

export const BtnComp = ({ label, cls, setRealtimeDisplay }) => {
  return (
    <div
      class={cls}
      onClick={() => (cls === "display" ? null : setRealtimeDisplay(label))}
    >
      {label}
    </div>
  );
};

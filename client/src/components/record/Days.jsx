import React from "react";

export const Days = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 mt-12 ml-6">
        <img src="/prev.png" alt="" id="prev-btn" />
        <p>Last 30 days</p>
        <img src="/next.png" alt="" id="next-btn" />
      </div>
    </div>
  );
};

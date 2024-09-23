import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-row gap-[811px]">
      <div className=" flex flex-row">
        <img src="/logo-g.png" alt="" className="w-[27.8] h-[27.4]" />
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex flex-row ">
        <div>
          <img src="/plus.png" alt="" className="w-[15px] h-[15px]" />
          <p>Record</p>
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

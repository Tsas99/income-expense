"use client";

export const Button = ({ children, clickHandler, color }) => {
  return (
    <div
      className={` border rounded-full w-[384px] h-[48px] bg-${color}-600 text-white`}
    >
      <button
        className="flex justify-center items-center w-[100%] h-[100%]"
        onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  );
};

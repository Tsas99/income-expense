"use client";

export const Input = ({ type, placeholder, value, inputHandler, name }) => {
  return (
    <div className="w-[384px] h-[48px] rounded-lg  bg-slate-200">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
        className="fill-none bg-transparent px-4 py-3 w-[100%] border-none"
      />
    </div>
  );
};

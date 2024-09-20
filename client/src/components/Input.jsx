"use client";

export const Input = ({ type, placeholder, inputHandler, name }) => {
  return (
    <div className="w-[100%] rounded-lg bg-[#F3F4F6] border-gray-300 px-4 py-3 mb-4">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={inputHandler}
      />
    </div>
  );
};

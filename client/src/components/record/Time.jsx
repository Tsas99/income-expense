"use client";
export const Time = ({ value }) => {
  return (
    <div className="card w-[120px]  h-8 rounded-xl outline-none flex text-black border-2 border-gray-100 items-center justify-center">
      <input type="time" defaultValue={`${value}`} />
    </div>
  );
};

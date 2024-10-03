"use client";
export const Calendar = ({ value }) => {
  return (
    <div className="card rounded-xl outline-none flex text-black border-2 border-gray-100 w-fit pl-2 items-center justify-center">
      <input type="date" defaultValue={`${value}`} />
    </div>
  );
};

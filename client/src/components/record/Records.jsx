import React from "react";
import { Types } from "./Types";
import { Category } from "./Category";

export const Records = () => {
  return (
    <div className="w-[282px] h-[1080px] border rounded-xl bg-slate-50 mt-6 ml-[120px]">
      <div className="flex flex-col gap-6 mt-6 ml-4">
        <div className="text-2xl font-semibold">Records</div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn w-[250px] h-8 rounded-full bg-[#0166FF] text-[#FFFFFF] text-base font-normal"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          +Add
        </button>
        <dialog id="my_modal_1" className="modal w-[792px] h-[512px] ">
          <div className="modal-box w-[792px] h-[512px]">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-[250px] h-8"
        />
      </div>
      <Types />
      <Category />
    </div>
  );
};

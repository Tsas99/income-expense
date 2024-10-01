import React from "react";
import { Types } from "./Types";
import { Category } from "./Category";

export const Records = () => {
  return (
    <div className="w-[282px] h-[1080px] border rounded-xl bg-slate-50 mt-6 ml-[120px]">
      <div className="flex flex-col gap-6 mt-6 ml-4">
        <div className="text-2xl font-semibold">Records</div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn w-[250px] h-8 rounded-full bg-[#0166FF] text-[#FFFFFF]
        text-base font-normal"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Add Records
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-[792px] h-[512px]">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-semibold text-[#0F172A] text-xl mt-5 ml-6">
              {" "}
              Add Records
            </h3>

            <div className="border-b-2 mt-4 "></div>
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

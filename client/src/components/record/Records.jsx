import React from "react";
import { Types } from "./Types";
import { Category } from "./Category";
import { ExpenceIncome } from "./ExpenceIncome";
import { PayeeInput } from "./PayeeInput";
import { Amount } from "./Amount";
import { CategorySelect } from "./CategorySelect";
import { Calender } from "./Calendar";

export const Records = () => {
  return (
    <div className="w-[282px] h-[1080px] border rounded-xl bg-slate-50 mt-6 ml-[120px]">
      <div className="flex flex-col gap-6 mt-6 ml-4">
        <div className="text-2xl font-semibold">Records</div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className=" w-[250px] h-[32px] bg-[#0166FF] rounded-full text-[white] text-base font -normal"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          + Add
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-[792px] h-[512px]">
            <h3 className="font-semibold text-lg">Add Record</h3>
            <div className="border-b-2 mt-5 w-[792px] border-[#E2E8F0]"></div>
            <div className="flex flex-row ">
              <div>
                {" "}
                <ExpenceIncome />
                <Amount />
                <CategorySelect />
                <Calender />
              </div>
              <div>
                <PayeeInput />
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn btn-md  btn-circle btn-ghost absolute right-2 top-2 mt-2 mr-3">
                  <img src="/btn.png" alt="" />
                </button>
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

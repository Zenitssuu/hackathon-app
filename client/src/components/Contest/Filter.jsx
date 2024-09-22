import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";

function Filter() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="w-[70dvw] flex justify-center gap-7">
        <div className="w-[50dvw] py-2 px-5 rounded-lg bg-white flex text-black items-center gap-3 text-xl">
          <div className="text-xl">
            <IoSearch />
          </div>
          <input
            type="text"
            placeholder="search"
            className="w-full h-full outline-none"
          />
        </div>
        <div>
          <button className="bg-white text-black py-3 px-4 rounded-lg flex items-center gap-3">
            Filter
            <div className="">
              <FaAngleDown />
            </div>
          </button>
        </div>
      </div>
      <div className="w-[58dvw] flex justify-start">
        <div className=" mt-5 flex flex-wrap p-1 text-white gap-3">
          <div className="bg-[#7A8F9A] py-2 rounded-xl px-4 flex gap-2 items-center">
            <span>Option 1</span>
            <button className="transform rotate-45 text-xl">
              <RiAddCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

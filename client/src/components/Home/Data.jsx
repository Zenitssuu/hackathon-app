import React from "react";
import ai from "../../assets/icons/ai.svg";
import ds from "../../assets/icons/ds.svg";
import host from "../../assets/icons/ai-host.svg";

function Data() {
  return (
    <div className="flex justify-around items-center bg-[#002A3B] h-[20dvh]">
      <div className="relative flex gap-4 before:absolute before:bg-slate-500 before:h-[3rem] before:w-[2px] before:top-1 before:-right-28">
        <div>
          <img src={ai} alt="ai" />
        </div>
        <div className="flex flex-col text-white font-bold text-xl">
          <span>100k+</span>
          <span>AI model submission</span>
        </div>
      </div>
      <div className="relative flex gap-4 before:absolute before:bg-slate-500 before:h-[3rem] before:w-[2px] before:top-1 before:-right-28">
        <div>
          <img src={ds} alt="ds" />
        </div>
        <div className="flex flex-col text-white font-semibold text-xl">
          <span>50k+</span>
          <span>Data Scientists</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <img src={host} alt="host" />
        </div>
        <div className="flex flex-col text-white font-bold text-xl">
          <span>100+</span>
          <span>AI challenges hosted</span>
        </div>
      </div>
    </div>
  );
}

export default Data;

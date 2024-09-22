import React from "react";
import { IoMdTime } from "react-icons/io";
import level from "../../assets/icons/carbon_skill-level-basic.svg"


function Contest() {
  return (
    <div className="min-h-screen text-white w-full mb-5">
      <div className="h-[350px] bg-[#003145] w-full flex ">
        <div className=" flex flex-col justify-center ml-[8rem]">
          <div className="font-semibold bg-yellow-300 text-black py-2 px-4 rounded-full mb-6 max-w-fit flex items-center gap-1">
            <IoMdTime />
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Data Sprint 72 - Butterfly Identification
          </h1>

          <p className="text-xl mb-6">
            Identify the class to which each butterfly belongs to
          </p>

        <div className="w-fit py-1 px-5 bg-white text-black flex gap-1 rounded-md">
          <img src={level} alt="level" />
            Easy
        </div>

        </div>
      </div>

      <div className="w-full text-black/60 flex flex-col items-center">
        <div className="shadow-lg w-full flex justify-between px-1 py-2 items-center">
          <span className="relative ml-[8rem] font-semibold text-xl before:absolute before:bg-blue-500 before:h-[3px] before:w-[7rem] before:-bottom-4 before:-left-2">
            Overview
          </span>
          {/* <div className=" after:flex after:bg-blue-300"></div> */}
          <div className="flex gap-4 mr-[2rem]">
            <button className="bg-green-500 py-2 px-5 rounded-lg">edit</button>
            <button className="py-2 px-5 rounded-lg border-2  border-red-500">
              delete
            </button>
          </div>
        </div>

        <div className="w-full mt-10 text-xl leading-7">
          <p className="ml-[8rem] max-w-[1000px] flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis odit pariatur non aut laborum, omnis qui voluptate
              vero amet cupiditate at minus labore quas beatae repellat sit? Est
              saepe pariatur soluta qui laborum quis non. Odio aliquid nostrum
              mollitia. Facere?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              architecto delectus similique, dolorum voluptas suscipit placeat,
              accusamus minima consequuntur a et reiciendis odio soluta mollitia
              inventore dolore modi labore expedita perferendis provident.
              Similique itaque, eaque quod repellendus repellat, error doloribus
              sit saepe provident, magnam iusto!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel
              eos corporis amet repellendus numquam aliquid nihil fugiat in, sed
              quia consequuntur atque, sapiente aliquam. Ab tenetur ex tempora
              vel?
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contest;

import React from "react";
import rocket from "../../assets/icons/PicsArt_04-14-04.42 1.svg";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();
  const createChallenge = () => {
    navigate('/create-contest')
  }
  return (
    <div className="flex  items-center h-[80dvh] shadow-[0_2px_2px_rgba(255,255,255,0.4)] border-b">
      <div className="ml-[10rem] max-w-[750px] px-1 py-2 flex flex-col gap-10">
        <h1 className="relative text-6xl text-white font-semibold flex flex-col gap-2 before:absolute before:bg-yellow-500 before:h-[9rem] before:w-[10px] before:-top-1 before:-left-16">
          <span>Accelerate Innovation</span>
          <span>with Global AI Challenges</span>
        </h1>
        <p className="text-xl text-white max-w-[550px]">
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </p>
        <button
         onClick={createChallenge}
         className=" bg-white text-black px-5 py-2 font-bold rounded-lg w-fit">
          Create Challenge
        </button>
      </div>
      <div>
        <img src={rocket} alt="rocket" />
      </div>
    </div>
  );
}

export default Hero;

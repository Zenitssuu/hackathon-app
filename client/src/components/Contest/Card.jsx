import React, { useEffect, useState } from "react";
import image from "../../assets/cardimage/Group 1000002466.png";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router";

function Card({ data }) {
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [date, setDate] = useState()

  useEffect(() => {
    setDays()
  }, [])

  const naviagte = useNavigate();
  console.log(data);
  
  const toContest = () => {
    naviagte(`contest/${data._id}`);
  };

  console.log(data);
  return (
    <div
      key={data._id}
      className="w-[330px] h-[450px] rounded-2xl bg-white flex flex-col gap-2 border-red-300"
    >
      <div>
        <img src={image} alt="img" />
      </div>

      <div className="mt-4">
        {/* staus */}
        <div className="w-full flex justify-center">
          <span className={`px-7 rounded-md ${data.status === 'upcomming' || 'active' ? "bg-[#FCF1D2]": "bg-[#FFDED4]" }`} >{data.status}</span>
        </div>
        {/* title */}
        <div className="flex justify-center mt-4">
          <h1 className="font-bold text-lg text-center">
            {data.title}
          </h1>
        </div>

        {/* time */}
        <div className="flex mt-4 flex-col items-center text-[#454545]">
          <span className="font-semibold">
            {data.status === 'active' && "Ongoing"}
            {data.status === 'past' && "Ended On"}
            {data.status === 'upcoming' && "Starting On"}
          </span>
          <div>Time</div>
        </div>

        {/* button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={toContest}
            className="bg-green-600 px-5 rounded-lg py-2 text-white font-semibold flex gap-2 items-center"
          >
            <span>
              <SiTicktick />
            </span>
            Participate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

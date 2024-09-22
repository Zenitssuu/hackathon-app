import React, { useState, useEffect } from "react";
import { Data, Hero, Perks, List, Filter } from "../index.js";
import axios from "axios";

function Home() {
  const [list, setList] = useState();
  const [loader, setLoader] = useState(true);

  const findList = async () => {
    const temp = await axios.get("/contests/get-contests");
    console.log(temp.data.data);
    setList(temp.data.data);
    setLoader(false);
  };

  useEffect(() => {
    findList();
  }, []);
  return loader ? (
    <div className="min-h-screen w-full flex items-center justify-center">
      Loading Contests
    </div>
  ) : (
    <div className="min-h-screen w-full">
      <div className="h-screen bg-[#003145] ">
        <Hero />
        <Data />
      </div>
      <Perks />
      <div className="h-[50dvh] bg-[#002A3B]">
        <Filter />
      </div>
      <div className="w-full py-16 bg-[#013246] ">
        <List lists={list} />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Card } from "../index.js";

function List({ lists }) {
  console.log(lists);

  const arr = [1, 2, 3, 4, 5];
  // let cnt=0;

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="grid grid-cols-3 gap-y-16 w-[85dvw] justify-items-center">
        {lists?.map((list) => {
          return <Card data={list}/>;
        })}
      </div>
    </div>
  );
}

export default List;

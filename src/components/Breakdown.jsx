import React from "react";

export const Breakdown = ({ points, breakdown }) => {
  return (
    <div className="flex justify-center overflow-auto hidescrollbar border-l border-black">
      <div className="flex flex-col p-4 bg-amber-50  w-[22rem] text-sm h-full">
        <p className="font-semibold text-center pt-2">Point Breakdown</p>
        <div className="flex flex-col py-4 border-t-2 border-black border-b-2 space-y-3 text-xs overflow-auto hidescrollbar">
          {breakdown.map((desc) => {
            if (desc.length === 2) {
              return (
                <div className="flex border-b border-gray-400 pb-1 space-x-1">
                  <p>{desc[0] + " -"} </p> <p className="flex-1">{desc[1]}</p>
                </div>
              );
            } else {
              return (
                <div className="flex border-b border-gray-400 pb-1">
                  <p className="pr-1">{desc[0] + "  -"} </p>{" "}
                  <div className="w-1/2 flex-1 space-y-2">
                    <p>{desc[1]}</p>
                    <p>{desc[2]}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="flex space-x-2 items-center">
          <span className="font-bold fastup text-lg">FetchPoints: </span>
          <span>{points}</span>
        </div>
      </div>
    </div>
  );
};

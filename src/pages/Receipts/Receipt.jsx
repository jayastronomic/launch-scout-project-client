import React from "react";

const Receipt = ({
  retailer,
  purchaseDate,
  purchaseTime,
  items,
  total,
  index,
}) => {
  return (
    <div className="flex flex-col p-4 bg-amber-50 w-[22rem] text-sm h-fulltransition">
      <div className="flex justify-between">
        <div>
          <span className="font-bold">Retalier:</span> {retailer}
        </div>
        <p> R#{index + 1}</p>
      </div>
      <div className="">
        <span className="font-bold">Purchase Date:</span> {purchaseDate}
      </div>
      <div>
        <span className="font-bold">Purchase Time:</span> {purchaseTime}
      </div>
      <div className="border-b-4 border-black rounded">
        {items.length} items
      </div>
      <div className=" max-h-full border-black border-b overflow-auto hidescrollbar">
        <ul>
          {items.map((item) => (
            <li>
              <div className="flex justify-between border-b py-1">
                <div>1 x {item.short_description}</div>
                <p>$ {parseFloat(item.price).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <div className="flex justify-end space-x-2 pt-4">
          <span className="font-bold">Total: </span>
          <span>$ {parseFloat(total).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;

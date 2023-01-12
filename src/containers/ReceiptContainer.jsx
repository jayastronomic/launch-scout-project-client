import React from "react";
import Accordian from "../components/Accordian";

export const ReceiptContainer = ({ receipts }) => {
  return (
    <div className="border h-full max-h-full overflow-auto hidescrollbar">
      {receipts.map((receipt, i) => (
        <Accordian receipt={receipt} key={receipt.id} index={i} />
      ))}
    </div>
  );
};

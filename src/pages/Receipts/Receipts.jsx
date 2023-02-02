import React, { useEffect, useState } from "react";
import { ReceiptContainer } from "../../containers/ReceiptContainer";

const NoReceipts = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-48 text-gray-300 text-xl font-bold">
      <p>No Receipts Found</p>
      <p className="text-sm text-thin text-gray-500">
        Add New Receipt for Processing
      </p>
    </div>
  );
};

const Receipts = () => {
  useEffect(() => {
    fetch("http://localhost:4000/receipts")
      .then((resp) => resp.json())
      .then((receiptData) => setReceipts(receiptData));
  }, []);

  const [receipts, setReceipts] = useState([]);
  return (
    <main className="flex justify-center bg-blue-400 py-8 px-4 flex-1">
      <section className="flex flex-col bg-white w-full max-w-[36rem] rounded-xl p-4 overflow-auto hidescrollbar max-h-[42rem]">
        <div className="flex justify-center w-full pb-8">
          <h2 className="font-bold text-xl self-center max-h-full border-b-2 border-black">
            Receipts
          </h2>
        </div>
        {receipts.length === 0 ? (
          <NoReceipts />
        ) : (
          <ReceiptContainer receipts={receipts} />
        )}
      </section>
    </main>
  );
};

export default Receipts;

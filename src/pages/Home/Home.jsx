import React, { useState } from "react";
import Form from "./Form";
import Receipt from "../../icons/Receipt";
import XReceipt from "../../icons/XReceipt";
import Close from "../../icons/Close";
const Home = ({ authUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  return (
    <main className="relative h-full flex flex-col items-center bg-[#004AAD] pb-8 hidescrollbar overflow-auto">
      <div className="px-4">
        <Form
          setShowModal={setShowModal}
          setError={setError}
          authUser={authUser}
        />
      </div>
      {showModal && (
        <button
          onClick={() => {
            if (error) {
              setError(false);
            }
            setShowModal(false);
          }}
          className="flex justify-center items-center fixed inset-0 bg-black z-20 bg-opacity-30"
        >
          {error ? (
            <div className="relative bg-white w-[20rem] h-[20rem] rounded-2xl flex flex-col items-center justify-center text-2xl font-medium text-gray-700 border-2 shadow-3xl z-100">
              <h2>Receipt Not Processed!</h2>
              <p className="text-sm text-red-500">
                Make sure all fields are filled out!
              </p>
              <XReceipt className={"animate-float absolute"} />
              <Close position={"absolute top-1 right-1"} />
            </div>
          ) : (
            <div className="relative bg-white w-[20rem] h-[20rem] rounded-2xl flex flex-col items-center justify-center text-2xl font-medium text-gray-700 border-2 shadow-3xl space-y-8">
              <h2>Receipt Processed!</h2>
              <Receipt className={"animate-float absolute"} />
            </div>
          )}
        </button>
      )}
    </main>
  );
};

export default Home;

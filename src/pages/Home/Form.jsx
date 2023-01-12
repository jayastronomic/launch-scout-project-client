import { React, useReducer } from "react";
import DetailField from "./DetailField";
import ItemField from "./ItemField";
import { calculateTotal } from "../../helpers/calculateTotal";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM_FIELD":
      const newItemField = { short_description: "", price: "" };
      return { ...state, items: [...state.items, newItemField] };
    case "HANDLE_CHANGE":
      const { key, index, name, value } = action.payload;
      if (key === "items") {
        const items = [...state.items];
        items[index][name] = value;
        return { ...state, items: items };
      }
      const details = [...state.details];
      details[index].value = value;
      return { ...state, details: details };
    case "REMOVE_ITEM":
      const indexOfItem = action.payload;
      const newItemsList = [
        ...state.items
          .slice(0, indexOfItem)
          .concat(state.items.slice(indexOfItem + 1, state.items.length)),
      ];
      const itemValue = parseFloat(state.items[indexOfItem].price);
      const updatedTotal = calculateTotal(itemValue, indexOfItem, true);
      const newDetails = [...state.details];
      newDetails[3].value = updatedTotal.toString();
      return { ...state, details: newDetails, items: newItemsList };
    case "UPDATE_TOTAL":
      let newValue = action.payload.value;
      if (newValue.length === 0) {
        newValue = 0;
      } else {
        newValue = parseFloat(action.payload.value);
      }
      const newTotal = calculateTotal(newValue, action.payload.index);
      const updatedDetails = [...state.details];
      updatedDetails[3].value = newTotal.toString();
      return { ...state, details: updatedDetails };
    default:
      return state;
  }
}

const initialState = {
  details: [
    {
      label: "Retailer",
      id: "retailer",
      name: "retailer",
      placeholder: "Retailer",
      value: "",
      type: "text",
    },
    {
      label: "Purchase Date",
      id: "purchaseDate",
      name: "purchaseDate",
      placeholder: "Purchase Date",
      value: "",
      type: "date",
    },
    {
      label: "Purchase Time",
      id: "purchaseTime",
      name: "purchaseTime",
      placeholder: "Purchase Time",
      value: "",
      type: "time",
    },
    {
      label: "Total",
      id: "total",
      name: "total",
      placeholder: "Total",
      value: "0.00",
      type: "number",
    },
  ],
  items: [{ short_description: "", price: "" }],
};

const Form = ({ setShowModal, setError }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemField = () => {
    dispatch({
      type: "ADD_ITEM_FIELD",
    });
  };

  const handleChange = (e, index, key = "details") => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        key: key,
        index: index,
        name: e.target.name,
        value: e.target.value,
      },
    });
    if (e.target.name === "price") {
      updateTotal(e.target.value, index);
    }
  };

  const updateTotal = (value, index) => {
    dispatch({
      type: "UPDATE_TOTAL",
      payload: { value, index },
    });
  };

  const removeItem = (index) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: index,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReceipt = {
      receipt: {
        retailer: state.details[0].value,
        purchase_date: state.details[1].value,
        purchase_time: state.details[2].value,
        total: state.details[3].value,
        items: state.items,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReceipt),
    };

    fetch("http://localhost:4000/receipts/process", payload)
      .then((resp) => resp.json())
      .then((receiptData) => {
        if (receiptData.id) {
          setShowModal(true);
        } else {
          setShowModal(true);
          setError(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setShowModal(true);
        setError(true);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border-2 border-gray-20 rounded-xl p-8 shadow-lg mt-8 space-y-10 w-full max-w-[36rem] bg-white"
    >
      <h2 className="self-center font-semibold text-xl underline underline-offset-8 pb-10">
        Receipt Processor Form
      </h2>
      {state.details.map((detail, index) => {
        return (
          <DetailField
            detail={detail}
            key={index}
            handleChange={handleChange}
            index={index}
          />
        );
      })}
      <div className="flex flex-col space-y-4">
        <h2 className="font-bold text-lg">Items Purchased</h2>
        <div className="grid grid-cols-2 gap-8">
          {state.items.map((item, index) => {
            return (
              <ItemField
                state={item}
                index={index}
                key={index}
                handleChange={handleChange}
                removeItem={removeItem}
                lengthOfItems={state.items.length}
                updateTotal={updateTotal}
              />
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => addItemField()}
          className="self-start bg-blue-600 rounded px-8 py-2 text-white font-bold hover:bg-blue-400 transition"
        >
          Add item
        </button>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-600 text-white font-bold py-2  hover:bg-blue-400 transition"
      >
        Submit Receipt
      </button>
    </form>
  );
};

export default Form;

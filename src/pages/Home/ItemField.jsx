import React, { useState } from "react";
import Close from "../../icons/Close";

const ItemField = ({
  index,
  state,
  handleChange,
  removeItem,
  lengthOfItems,
}) => {
  const [itemFocus, setItemFocus] = useState("");
  const inputClass =
    "peer placeholder-transparent border-b-2 cursor-pointer focus:outline-none focus:border-b-[#300d38] z-[1] bg-transparent";
  const labelClass =
    "absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400" +
    " peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all";
  return (
    <div
      className={`flex flex-col border rounded-lg p-4 space-y-8 ${itemFocus}`}
    >
      <div className="flex justify-between items-center">
        <h2>Item {index + 1}</h2>
        {lengthOfItems === 1 ? null : (
          <button
            className="text-sm"
            type="button"
            onClick={() => removeItem(index)}
          >
            <Close />
          </button>
        )}
      </div>
      <div className="relative flex flex-col">
        <input
          id={"item" + (index + 1)}
          className={inputClass}
          name="short_description"
          placeholder="Name"
          value={state.short_description}
          onChange={(e) => handleChange(e, index, "items")}
          onFocus={() => setItemFocus("border-blue-400 shadow-lg")}
          onBlur={() => setItemFocus("")}
        />
        <label className={labelClass}>Name</label>
      </div>

      <div className="relative flex flex-col">
        <input
          type="number"
          step="0.01"
          id={"price" + (index + 1)}
          className={inputClass}
          name="price"
          placeholder="Price"
          value={state.price}
          onChange={(e) => {
            handleChange(e, index, "items");
          }}
          onFocus={() => setItemFocus("border-blue-400 shadow-lg")}
          onBlur={() => setItemFocus("")}
        />
        <label className={labelClass}>Price</label>
      </div>
    </div>
  );
};

export default ItemField;

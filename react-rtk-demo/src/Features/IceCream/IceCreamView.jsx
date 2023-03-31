import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const iceCreamView = () => {
  const [value, setValue] = useState(1);
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams : {numberOfIceCreams}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered(value))}>Order Cake</button>
      <hr />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock IceCream
      </button>
    </div>
  );
};

export default iceCreamView;

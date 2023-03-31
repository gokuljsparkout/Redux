import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const [value, setValue] = useState(1);
  const numberOfCakes = useSelector((state) => state.cake.numberofCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes : {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered(value))}>Order Cake</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cake</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
};

export default CakeView;

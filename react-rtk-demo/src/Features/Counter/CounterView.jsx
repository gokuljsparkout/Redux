import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../App/store";
import { decreaseCount, increaseCount } from "./counterSlice";

const   CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return <div>
    <h2>Counter</h2>
    <h3>{count}</h3>
    <button onClick={()=>{dispatch(increaseCount())}}>Increment</button>
    <button onClick={()=>{dispatch(decreaseCount())}}>Decrement</button>
  </div>
};

export default  CounterView;

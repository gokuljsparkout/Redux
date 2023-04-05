import React from "react";
import "../Stylesheets/Content.css";
import pizzadata from "../pizzadata";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";

const Content = () => {
  const pizzas = pizzadata;
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <div className="body">
      {pizzas.map((pizza) => {
        return <PizzaItem pizza={pizza} key={pizza.id} />;

      })}
    </div>
  );
};

export default Content;

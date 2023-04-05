import React from "react";
import "../Stylesheets/PizzaItem.css";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  removeFromCart,
} from "../Features/Cart/CartSlice";

const PizzaItem = ({ pizza }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <Row className="pizzaitem">
      <Col xs={12} md={4} lg={12}>
        <div className="pizzaitemoutercontainer">
          <img className="pizzaimage" src={pizza.image} />
        </div>
      </Col>
      <Col xs={12} md={8} lg={9}>
        <div className="pizzaitemcontainer">
          <h4 className="pizzaitemtext">{pizza.name}</h4>
          <h4 className="pizzaitemdescription">
            {pizza.description.length > 30
              ? pizza.description.substring(0, 30) + " ..."
              : pizza.description}
          </h4>
          {cart.some((c) => c.id === pizza.id) ? (
            <button
              onClick={() => removeItemFromCart(pizza)}
              className="pizzaitembutton"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() => addItemToCart(pizza)}
              className="pizzaitembutton"
            >
              Add to Cart
            </button>
          )}

          {/* {cart.some((c) =>
            c.id === pizza.id ? (
              <button
                onClick={() => removeItemFromCart(pizza)}
                className="pizzaitembutton"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => addItemToCart(pizza)}
                className="pizzaitembutton"
              >
                Add to Cart
              </button>
            )
          )} */}
        </div>
      </Col>
    </Row>
  );
};

export default PizzaItem;

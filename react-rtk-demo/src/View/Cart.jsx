import React from "react";
import Header from "../Components/Header";
import "../Stylesheets/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../Features/Cart/CartSlice";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);

  const incrementCartItem = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decrementCartItem = (item) => {
    dispatch(decrementQuantity(item));
  };
  return (
    <>
      <Header />
      <div className="cart">
        <div className="cartleft">
          {cart.map((item) => (
            <div
              style={{
                marginBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
              }}
              key={item.id}
            >
              <div className="cartimage">
                <img
                  src={item.image}
                  style={{
                    height: 60,
                    weight: 60,
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                  alt={item.name}
                />
              </div>

              <div>
                <div className="cartdescription">
                  <h3 className="carttext">{item.name}</h3>
                  <h4 className="carttextdescription">{item.description}</h4>
                  <h4 className="carttype">Regular | 100% thin white crust</h4>
                </div>
              </div>

              <div>
                <div style={{ marginLeft: "auto" }} className="carttotal"></div>
                <h4>{item.price * item.quantity}</h4>
                <div className="cartbuttons">
                  <div
                    className="cartbutton"
                    onClick={() => decrementCartItem(item)}
                  >
                    -
                  </div>
                  <div className="cartbutton">{item.quantity}</div>
                  <div
                    className="cartbutton"
                    onClick={() => incrementCartItem(item)}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cartright">
          <h3 className="cartrighttext">Choose delivery address</h3>
          <div className="carttop">
            <AddLocationIcon style={{ color: "gray", fontSize: 13 }} />
            <div className="cartrightdesc">
              <h4>Select Location</h4>
              <h4>Please Select a Location</h4>
              <button
                style={{
                  color: "green",
                  borderColor: "green",
                  borderWidth: 0.7,
                  cursor: "pointer",
                  marginTop: 7,
                  padding: 4,
                  borderRadius: 4,
                }}
              >
                Add Location
              </button>
            </div>
          </div>

          <div className="carttop">
            <AddLocationIcon style={{ color: "gray", fontSize: 13 }} />
            <div className="cartrightdesc">
              <h4>Login to use your saved address</h4>
              <button
                style={{
                  color: "green",
                  borderColor: "green",
                  borderWidth: 0.7,
                  cursor: "pointer",
                  marginTop: 7,
                  padding: 4,
                  borderRadius: 4,
                }}
              >
                Login
              </button>
            </div>
          </div>
          <hr style={{ marginTop: 10, marginBottom: 10 }} />
          <h3 className="cartrighttext">Price Details</h3>
          <div>
            <div
              className="total"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>Sub Total</h4>
              <h4 style={{ fontSize: 13, fontWeight: "bold" }}>{total}</h4>
            </div>
            <div
              className="total"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>Tax and Charges</h4>
              <h4 style={{ fontSize: 13, fontWeight: "bold" }}>59</h4>
            </div>
            <div
              className="total"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>Total</h4>
              <h4 style={{ fontSize: 13, fontWeight: "bold" }}>{total + 59}</h4>
            </div>
            <button
              style={{
                width: "100%",
                height: 25,
                backgroundColor: "green",
                color: "white",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

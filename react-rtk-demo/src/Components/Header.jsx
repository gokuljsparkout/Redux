import React from "react";
import "../Stylesheets/Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="logo"
          src="https://www.seekpng.com/png/full/121-1217491_pizza-hut-png-graphic-free-stock-pizza-hut.png"
        ></img>
      </div>

      <div className="header-mid">
        <h3 className="header-text">Select Location</h3>
        <h3 className="header-text">
          Selection Location According to your place
        </h3>
      </div>
      <div
        onClick={() => {
          const newPath = location.pathname === "/" ? "/cart" : "/";
          navigate(newPath);
        }}
        style={{ position: "relative", cursor: "pointer" }}
      >
        {location.pathname !== "/cart" ? (
          <>
            <ShoppingCartIcon style={{ color: "red" }} />
            {cart.length !== 0 && (
              <span
                style={{
                  backgroundColor: "red",
                  width: 15,
                  height: 15,
                  borderColor: "white",
                  borderRadius: 7,
                  textAlign: "center",
                  position: "absolute",
                  bottom: 16,
                  left: 14,
                  fontSize: 14,
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                {cart.length}
              </span>
            )}
          </>
        ) : (
          <HomeIcon style={{ color: "red" }} />
        )}
      </div>

      <div className="header-right">
        <h4 className="header-text">Gokul J</h4>
        <h4 className="header-text">000777</h4>
      </div>
    </div>
  );
};

export default Header;

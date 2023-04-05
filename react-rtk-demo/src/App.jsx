import "./App.css";
import Home from "./View/Home";
import { Provider } from "react-redux";
import store from "./App/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./View/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import ParentComponent from "./ParentComponent";

// import Home from "./View/Home";
// import { Provider } from "react-redux";
// import store from "./App/store";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Cart from "./View/Cart";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ParentComponent/>
      {/* <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </Router> */}
    </div>
  );
}

export default App;

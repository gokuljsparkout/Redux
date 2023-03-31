//import "./App.css";
import CakeView from "./Features/Cake/CakeView";
import IceCreamView from "./Features/IceCream/IceCreamView";
import UserView from "./Features/User/UserView";

function App() {

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;

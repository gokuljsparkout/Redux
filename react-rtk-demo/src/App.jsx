import SignUp from "./Components/SignUp";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css'
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ='/signup' element={<SignUp/>}/>
          <Route  path ='/signin' element={<SignIn/>}/>
          <Route path = '/home' element = {<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

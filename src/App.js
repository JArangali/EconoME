import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Sample from "./Components/Blank";

function App() {
  return (
    <div className="App">
      
      <Sample />
    </div>
  );
}
export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

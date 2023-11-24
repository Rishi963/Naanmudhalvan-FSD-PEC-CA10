import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import './Css/Style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
      </Routes>
    </Router>
  );
}

export default App;

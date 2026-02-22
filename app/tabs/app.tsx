import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import SetupAccount from "./SetupAccount";
import Homepage from "./Homepage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setup" element={<SetupAccount />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;

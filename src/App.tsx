import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Windbooking</h1>
      <Routes>
        <Route path="/home" element={Home} />
      </Routes>
    </div>
  );
}

export default App;

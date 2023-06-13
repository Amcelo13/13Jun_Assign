import React, { useState } from "react";
import Home from "./pages/Home";

import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Completed from "./pages/Completed";
import Deleted from "./pages/Deleted";

function App() {
 

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/delete"  element={<Deleted/>}/>
            <Route path="/completed"  element={<Completed/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

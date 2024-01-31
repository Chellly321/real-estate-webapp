import "./App.css";

import React, { useState } from "react";

import PropertyID from "./pages-user/PropertyID";
import PropertyDetail from "../data/PropertyDetail";

import Home from "./pages-user/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState(PropertyDetail);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home data={data} />} />
            <Route exact path="/properties/:id/" element={<PropertyID data={data}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

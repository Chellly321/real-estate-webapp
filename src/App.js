import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import PropertyDetail from "./pages-user/PropertyDetail";
import { housesData } from "./data.js";
import Home from "./pages-user/Home";
import Properties from "./pages-user/Properties.js";

function App() {
  const [data, setData] = useState(housesData);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home data={data} />} />
            <Route
              path="/properties/:id/"
              element={<PropertyDetail housesData={data} />}
            />
            <Route path="/properties" element={<Properties data={data} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

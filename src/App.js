import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import PropertyDetail from "./pages-user/PropertyDetail";
import { housesData } from "./data.js";
import Home from "./pages-user/Home";

function App() {
  const [data, setData] = useState(housesData);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home data={data} />} />
            <Route
              exact
              path="/properties/:id/"
              element={<PropertyDetail housesData={data} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

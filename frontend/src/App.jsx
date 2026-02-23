import { use, useState } from "react";

import viteLogo from "/vite.svg";
import "./App.scss";
import { getPeople } from "./api/api";
import PeopleList from "./components/PeopleList/PeopleList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PeopleList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react"; // ✅ Required for some setups
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeopleList from "./components/PeopleList/PeopleList";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PeopleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

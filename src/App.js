import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

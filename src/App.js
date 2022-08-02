import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import NavBar from "./Components/Navbar/Navbar";
import { Provider} from 'react-redux';
import { store } from "./store/store";

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pokemons" element={<ItemListContainer />} />
          <Route path="/pokemon/:pokemonId" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider >
  );
}

export default App;

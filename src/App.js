import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import NavBar from "./Components/Navbar/Navbar";
import { Provider } from 'react-redux';
import { store } from "./store/store";
import AppRoutes from "./routes/AppRoutes";

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </Provider >
  );
}

export default App;

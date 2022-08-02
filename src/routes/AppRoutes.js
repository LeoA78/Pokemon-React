import React from 'react'
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />

            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                } />

            <Route
                path="/pokemons"
                element={
                    <PrivateRoute>
                        <ItemListContainer />
                    </PrivateRoute>
                } />


            <Route
                path="/pokemon/:pokemonId"
                element={
                    <PrivateRoute>
                        <ItemDetailContainer />
                    </PrivateRoute>
                } />
        </Routes>
    )
}

export default AppRoutes
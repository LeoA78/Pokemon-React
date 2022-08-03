import React from 'react'
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import UserDetailContainer from "../Components/UserDetailContainer/UserDetailContainer";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Logout from '../Components/Logout/Logout';
import { useSelector } from "react-redux";

const AppRoutes = () => {

    const { userLogged } = useSelector((state) => state.user);

    const isUserLogged = () => Object.entries(userLogged).length > 0;


    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute auth={isUserLogged()}>
                        <Login />
                    </PublicRoute>
                } />

            <Route
                path="/register"
                element={
                    <PublicRoute auth={isUserLogged()}>
                        <Register />
                    </PublicRoute>
                } />

            <Route 
                path="/pokemons"
                element={
                    <PrivateRoute auth={isUserLogged()} >
                        <ItemListContainer />
                    </PrivateRoute>
                } />

            <Route
                path="/user"
                element={
                    <PrivateRoute auth={isUserLogged()}>
                        <UserDetailContainer />
                    </PrivateRoute>
                } />

            <Route
                path="/logout"
                element={
                    <PrivateRoute auth={isUserLogged()}>
                        <Logout />
                    </PrivateRoute>
                } />

            <Route
                path="/pokemon/:pokemonId"
                element={
                    <PrivateRoute auth={isUserLogged()}>
                        <ItemDetailContainer />
                    </PrivateRoute>
                } />
        </Routes>
    )
}

export default AppRoutes
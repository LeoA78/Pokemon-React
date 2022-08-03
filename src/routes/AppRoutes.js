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
import { isUserLogged } from "../slices/user/userUtils";

const AppRoutes = () => {

    const { userLogged } = useSelector((state) => state.user);

    const isLogged = isUserLogged(userLogged);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute auth={isLogged}>
                        <Login />
                    </PublicRoute>
                } />

            <Route
                path="/register"
                element={
                    <PublicRoute auth={isLogged}>
                        <Register />
                    </PublicRoute>
                } />

            <Route 
                path="/pokemons"
                element={
                    <PrivateRoute auth={isLogged} >
                        <ItemListContainer />
                    </PrivateRoute>
                } />

            <Route
                path="/user"
                element={
                    <PrivateRoute auth={isLogged}>
                        <UserDetailContainer />
                    </PrivateRoute>
                } />

            <Route
                path="/logout"
                element={
                    <PrivateRoute auth={isLogged}>
                        <Logout />
                    </PrivateRoute>
                } />

            <Route
                path="/pokemon/:pokemonId"
                element={
                    <PrivateRoute auth={isLogged}>
                        <ItemDetailContainer />
                    </PrivateRoute>
                } />
        </Routes>
    )
}

export default AppRoutes
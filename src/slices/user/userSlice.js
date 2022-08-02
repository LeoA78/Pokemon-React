import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [{
        id: 0,
        name: 'Leonel',
        lastName: 'Altamirano',
        email: 'pedroleonel78a@gmail.com',
        password: '123456',
    }],
    userLogged: {},
    globalId: 0,
    message: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.users.push({
                id: state.globalId + 1,
                name: action.payload.name,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password,
            });
        },
        loginUser: (state, action) => {
            state.userLogged = action.payload.userLogged;
        },
        logoutUser: (state) => {
            state.userLogged = {};
        },
        addFavoritePokemon: (state, action) => {
            state.userLogged.favorites.push(action.payload.pokemon);
        },
        setMessage: (state, action) => {
            state.message = action.payload.message;
        }

    },
});

export const { createUser, loginUser, logoutUser, addFavoritePokemon, setMessage } = userSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [{
        name: 'Leonel',
        lastName: 'Altamirano',
        email: 'pedroleonel78a@gmail.com',
        password: '123456',
        favoritePokemons: [],
    }],
    userLogged: {},
    message: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.users.push({
                name: action.payload.name,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password,
                favoritePokemons: [],
            });
        },
        loginUser: (state, action) => {
            state.userLogged = action.payload.userLogged;
        },
        logoutUser: (state) => {
            state.userLogged = {};
        },
        setMessage: (state, action) => {
            state.message = action.payload.message;
        },
        addFavoritePokemon: (state, action) => {
            const userIndex = state.users.findIndex(user => user.email === state.userLogged.email);
            if(userIndex !== -1){  
            state.users[userIndex].favoritePokemons.push(action.payload.pokemon);
            }
        },

    },
});

export const { createUser, loginUser, logoutUser, addFavoritePokemon, setMessage } = userSlice.actions;
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
        toggleFavoritePokemon: (state, action) => {
            const index = action.payload.userIndex;

            if (index !== -1) {
                const pokemon = action.payload.pokemon;
                const isFavorited = action.payload.isFavorited;
                if (isFavorited) {
                    const newFavouriteList = state.users[index].favoritePokemons.filter(favourite => favourite.id !== pokemon.id);
                    state.users[index].favoritePokemons = newFavouriteList;
                }
                else {
                    state.users[index].favoritePokemons.push(pokemon);
                }
            }
        },

    },
});

export const { createUser, loginUser, logoutUser, toggleFavoritePokemon, setMessage } = userSlice.actions;
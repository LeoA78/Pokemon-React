import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    page: 1,
    pokemons: [],
    pokemonById: 0,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state, action) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        setPokemonById: (state, action) => {
            state.isLoading = false;
            state.pokemonById = action.payload.pokemonById;
        }


    },
});

export const { startLoadingPokemons, setPokemons, setPokemonById } = pokemonSlice.actions;
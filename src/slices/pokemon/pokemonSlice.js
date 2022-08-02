import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    page: 1,
    pokemons: [],
    pokemonSelected: {},
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        setPokemonSelected: (state, action) => {
            state.isLoading = false;
            state.pokemonSelected = action.payload.pokemonSelected;
        }


    },
});

export const { startLoadingPokemons, setPokemons, setPokemonSelected } = pokemonSlice.actions;
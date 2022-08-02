import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "../slices/pokemon/pokemonSlice"
import { userSlice } from "../slices/user/userSlice";


export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        user: userSlice.reducer,
    },
});


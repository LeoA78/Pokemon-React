import { getData } from '../../Services/connection';
import { setPokemons, startLoadingPokemons, setPokemonById } from "./pokemonSlice";

const baseUrl = process.env.REACT_APP_API_URL;


export const getPokemons = (page = 0) => {

    return async (dispatch) => {
        dispatch(startLoadingPokemons(true));

        const pokemonList = [];

        const response = await getData(`${baseUrl}/pokemon/?limit=12&offset=${page * 12}`);


        for (let i = 0; i < response.results.length; i++) {
            const pokemon = await getData(response.results[i].url);
            pokemonList.push(pokemon);
        }

        dispatch(setPokemons({ pokemons: pokemonList, page }));
    }

}

export const getPokemonById = (id) => {
    
    return async (dispatch) => {
        dispatch(startLoadingPokemons(true));
        const response = await getData(`${baseUrl}/pokemon/${id}`);
        console.log('Esta es la respuesta byid', response);
        dispatch(setPokemonById({ pokemonById: response }));
    }
       
}
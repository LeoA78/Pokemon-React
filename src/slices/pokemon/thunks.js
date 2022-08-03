import { getData } from '../../Services/connection';
import { setPokemons, startLoadingPokemons, setPokemonSelected } from "./pokemonSlice";

const baseUrl = process.env.REACT_APP_API_URL;

const getInfoPokemon = async (url) => {
   
    const pokemon = await getData(url);

    const infoPokemon = { 
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types,
        weight: pokemon.weight,
        height: pokemon.height,
        stats: pokemon.stats,
    };

    const evolutions = await getEvolutions(pokemon.species.url);
    infoPokemon.evolutions = evolutions;

    return infoPokemon;
}

const getEvolutions = async (url) => {

    const { evolution_chain } = await getData(url); // Obtengo id de la evolucion
    const { chain } = await getData(evolution_chain.url); // Obtengo la cadena de evolución
    
    const evolutions = [];

    let currentEvolution = chain;

    while (currentEvolution.evolves_to.length > 0) {
        evolutions.push(currentEvolution.species.name);
        currentEvolution = currentEvolution.evolves_to[0];
    }
    evolutions.push(currentEvolution.species.name); //Agrego el último pókemon

    const evolutionsWithImage = await Promise.all(
        evolutions.map(async (pokemonName) => {
            const { sprites } = await getData(`${baseUrl}/pokemon/${pokemonName}`);
            return { name: pokemonName, image: sprites.other['official-artwork'].front_default };
        }
    ));

    return evolutionsWithImage;
}

export const getPokemons = (page = 1) => {

    return async (dispatch) => {
        dispatch(startLoadingPokemons());

        const { results } = await getData(`${baseUrl}/pokemon/?limit=12&offset=${(page - 1) * 12}`);

        const pokemons = await Promise.all(
            results.map( pokemon => {
              return getInfoPokemon(pokemon.url);
            })
        )

         dispatch(setPokemons({ pokemons , page })); 
    }
}



export const getPokemonSelected = (id) => {
    
    return async (dispatch) => {
        dispatch(startLoadingPokemons());

        const response = await getInfoPokemon(`${baseUrl}/pokemon/${id}`);

        console.log('Pokemon selected -->', response);

        dispatch(setPokemonSelected({ pokemonSelected: response })); 
    }

}
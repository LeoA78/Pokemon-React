const baseUrl = process.env.REACT_APP_API_URL;

export const getData = async (url_api) => {
    try {
        const response = await fetch(url_api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error); 
    }
}
/* 
export const getPokemons = async () => {
    try {
        const pokemonList = [];
        console.log(baseUrl);
        const response = await getData(`${baseUrl}/pokemon/?limit=25`);


        for (let i = 0; i < response.results.length; i++) {
            const pokemon = await getData(response.results[i].url);
            pokemonList.push(pokemon);
        }

        return pokemonList;
    }
    catch (error) {
        console.log(error);
    }
} */

export const getPokemonById = async (id) => {
    try {
        const response = await getData(`${baseUrl}/pokemon/${id}`);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const getEvolutions = async (id) => {
    try {
        const response = await getData(`${baseUrl}/evolution-chain/${id}`);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}


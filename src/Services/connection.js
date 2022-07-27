const getData = async (url_api) => {
    const response = await fetch(url_api);
    const data = await response.json();
    return data;
}

export const getPokemons = async () => {
    try {
        const listPokemons = [];
        const response = await getData('https://pokeapi.co/api/v2/pokemon/');

        for (let i = 0; i < response.results.length; i++) {
            const pokemon = await getData(response.results[i].url);
            listPokemons.push(pokemon);
        }

        return listPokemons;
    }
    catch (error) {
        console.log(error);
    }
}


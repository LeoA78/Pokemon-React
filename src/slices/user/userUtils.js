

export const isPokemonFavorited = (pokemon, user) => {
    return user.favoritePokemons.find(favourite => favourite.id === pokemon.id);
}

export const getUser = (users, userLogged) => {
    return users.find(user => user.email === userLogged.email);
}

export const getIndexUser = (users, userLogged) => {
    return users.findIndex(user => user.email === userLogged.email);
}

export const isUserLogged = (userLogged) => {
    return Object.entries(userLogged).length > 0;
}


import React from 'react'
import { toggleFavoritePokemon } from '../../slices/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isPokemonFavorited , getIndexUser } from '../../slices/user/userUtils';


const FavoritesButton = ({props}) => {

    const dispatch = useDispatch();

    const { users, userLogged } = useSelector(state => state.user);

    const currentUserIndex = getIndexUser(users, userLogged);
    const isFavorited = isPokemonFavorited(props, users[currentUserIndex]);



    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(toggleFavoritePokemon({ pokemon: props, userIndex: currentUserIndex, isFavorited }))
    }

    return (
        isFavorited
        ? <button onClick={(e) => handleClick(e)}>Quitar de favoritos</button>
        : <button onClick={(e) => handleClick(e)}>Agregar a favoritos</button>
    )
}

export default FavoritesButton
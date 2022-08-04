import React from 'react'
import { toggleFavoritePokemon } from '../../slices/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isPokemonFavorited , getIndexUser } from '../../slices/user/userUtils';
import './styles.css';


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
        ? <img className="btn-fav" width='35' src={require(`../../assets/icons/fav.png`)} alt="" onClick={(e) => handleClick(e)}/>
        : <img className="btn-fav" width='35' src={require(`../../assets/icons/disfav.png`)} alt="" onClick={(e) => handleClick(e)}/>
    )
}

export default FavoritesButton
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavoritePokemon } from '../../slices/user/userSlice';
import './styles.css';


const Item = ({props}) => {

  const dispatch = useDispatch();


  return (

    <div className="item-container">

      <div className="item-header">
        <img className='item-image' alt={`Imagen de ${props.title}`} src={props.image} />
      </div>

      <Link to={`../pokemon/${props.id}`} className={`item-body ${props.types[0].type.name}`}>
        <div className="item-info">

          <div className="item-title">
            <h3>{props.name}</h3>
            <span>#{props.id}</span>
          </div>

          <div className="item-description">
            <span>Peso: {(props.weight / 10)} kg</span>
            <span>Altura: {(props.height / 10)} mts</span>
          </div>

          <div className="item-types">
            <ul>
              {props.types.map((type, index) => {
                return (
                  <li key={index}>
                    <img className={`item-type-image ${type.type.name}`} src={require(`../../assets/icons/${type.type.name}.svg`)} alt="" />
                  </li>
                )
              })}
            </ul>
          </div>
            
          

        </div>

      </Link>
      <button onClick={() => dispatch(addFavoritePokemon({pokemon: props}))}>Agregar a Favoritos</button>
    </div>


  );
};



export default Item;

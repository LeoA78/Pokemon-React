import { Link } from 'react-router-dom';
import FavoritesButton from '../FavoritesButton/FavoritesButton';
import './styles.css';


const Item = ({ props }) => {


  return (

    <div className="item-container">

      <div className="item-header">
        <img className='item-image' alt={`Imagen de ${props.title}`} src={props.image} />
      </div>

      <Link to={`../pokemon/${props.id}`} className={`item-body ${props.types[0].type.name}`}>
        <div className="item-info">
          <div className="item-title">
            <h3>{`#${props.id}`}</h3>
            <span>{`${props.name}`}</span>
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
        <div className="item-favorite">
              <FavoritesButton props={props} />
        </div>
      </Link>




    </div>


  );
};



export default Item;

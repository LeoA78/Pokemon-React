import { Link } from 'react-router-dom';
import './styles.css';


const Item = ({ id, title, pictureUrl, types, weight, height }) => {

  return (

    <div className="item-container">

      <div className="item-header">
        <img className='item-image' alt={`Imagen de ${title}`} src={pictureUrl} />
      </div>

      <Link to={`../pokemon/${id}`} className={`item-body ${types[0].type.name}`}>
        <div className="item-info">

          <div className="item-title">
            <h3>{title}</h3>
            <span>#{id}</span>
          </div>

          <div className="item-description">
            <span>Peso: {(weight / 10)} kg</span>
            <span>Altura: {(height / 10)} mts</span>
          </div>

          <div className="item-types">
            <ul>
              {types.map((type, index) => {
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

    </div>


  );
};



export default Item;

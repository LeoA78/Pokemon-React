import * as React from 'react';
import './styles.css';


const Item = ({ id, title, pictureUrl, types, weight, height }) => {
  return (

    <div className="item-container">

      <div className="item-header">
        <img className='item-image' alt={`Imagen de ${title}`}src={pictureUrl} />
      </div>

      <div className='item-body'>
        <div className="item-info">

          <div className="item-title">
          <h3>{title}</h3>
          <span>#{id}</span>
          </div>

          <div className="item-description">
            <span>Peso: {(weight/10)} kg</span>
            <span>Altura: {(height/10)} mts</span>
          </div> 

          <div className="item-types">
            <ul>
              {types.map((type, index) => <li key={index}>{type.type.name}</li>)}
            </ul>
           </div> 


        </div>
      </div>

    </div>


  );
};



export default Item;

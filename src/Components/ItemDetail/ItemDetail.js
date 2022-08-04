import { LinearProgress } from '@mui/material';
import React from 'react';
import "./styles.css";

const ItemDetail = ({ id, title, weight,types, height, stats, evolutions, pictureUrl }) => {

    return (
        <div className="detail-container">
            <div className="detail-box">

                <section className="detail-box-header">

                    <div className="detail-header-id">
                        <h1>#{id}</h1>
                    </div>

                    <div className="detail-header-title">
                        <h3>{title}</h3>
                    </div>

                </section>

                <section className="detail-box-body">
                    <div className="detail-info">
                        <h3>Info</h3>
                        <p>{`Peso: ${weight / 10} Kg`}</p>
                        <p>{`Altura: ${height / 10} Mts`}</p>
                        <h2>Tipo</h2>
                        <div className="item-types">
                            <ul>
                                {types && types.map((type, index) => {
                                    return (
                                        <li key={index}>
                                            <img className={`item-type-image ${type.type.name}`} src={require(`../../assets/icons/${type.type.name}.svg`)} alt="" />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>
                    <div className="detail-stats">
                        <h3>Stats</h3>

                        {stats && stats.map((item, index) => {
                            return (
                                <section key={index}>
                                    <p>{item.stat.name}</p>
                                    <LinearProgress variant="determinate" value={item.base_stat} />
                                </section>
                            )
                        })}

                    </div>
                </section>

                <section className="detail-box-footer">
                    <h2>Cadena de Evoluciones</h2>
                    <div className="detail-evolutions">
                        {evolutions && evolutions.map((item, index) => {
                            return (
                                <section className='evolutions' key={index}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                </section>
                            )
                        }
                        )}

                    </div>

                </section>

            </div>

            <div className="image-box">

                <img src={pictureUrl} alt="" />


            </div>

        </div>
    )
}

export default ItemDetail
import { LinearProgress } from '@mui/material';
/* import React, {useState, useEffect} from 'react';
import { getEvolutions } from '../../Services/connection'; */
import "./styles.css";

const ItemDetail = ({ id, title, stats, pictureUrl }) => {

  /*   const [evolutions, setEvolutions] = useState()


    useEffect(() => {
        getEvolutions(id)
        .then((result) => setEvolutions(result))
    }, [id])
     */


    return (
        <div className="detail-container">
            <div className="detail-box">

                <div className="detail-box-header">
                    <h3 className='detail-title'>{title}</h3>
                </div>

                <div className="detail-box-body">
                    <h3>Stats</h3>

                    <div className="detail-stats">
                        {stats.map((stat) => {
                            return (
                                <>
                                    <span>{stat.stat.name}:</span>
                                    <LinearProgress variant="determinate" value={stat.base_stat} />
                                </>
                            )
                        })}
                    </div>

                </div>

                <div className="detail-box-footer">

                </div>

            </div>
            <div className="image-box">
                <img src={pictureUrl} alt="" />
            </div>

        </div>
    )
}

export default ItemDetail
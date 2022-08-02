import { LinearProgress } from '@mui/material';
import React from 'react';
import "./styles.css";

const ItemDetail = ({ id, title, stats, pictureUrl }) => {

    return (
        <div className="detail-container">
            <div className="detail-box">

                <div className="detail-box-header">
                    <h3 className='detail-title'>{title}</h3>
                </div>

                <div className="detail-box-body">
                    <h3>Stats</h3>

                     <div className="detail-stats">

                        { stats && stats.map((item, index) =>
                         {
                            return (
                                <section key={index}>
                                <p>{item.stat.name}</p>
                                <LinearProgress variant="determinate" value={item.base_stat} />
                                </section>
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
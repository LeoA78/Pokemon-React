import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Item from '../Item/Item';

const UserDetail = ({ props }) => {

    return (

        <Container className='container' >
            <div className="detail-box-header">
                <h2>{`${props.name} ${props.lastName}`}</h2>
            </div>


            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>


                {props.favoritePokemons.map((pokemon, index) => {
                    return (
                        <Grid item xs={12} sm={4} md={3} key={index}>
                            <Item props={pokemon} />
                        </Grid>
                    )
                }
                )}

            </Grid>

        </Container>

    )
}

export default UserDetail
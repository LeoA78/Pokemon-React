import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import './styles.css'
import { getPokemonById } from "../../slices/pokemon/thunks";
import { useSelector, useDispatch } from 'react-redux'


const ItemDetailContainer = () => {

    const dispatch = useDispatch();
    const { pokemonById, isLoading } = useSelector(state => state.pokemon);

    const { pokemonId } = useParams();

    useEffect(() => {

        dispatch(getPokemonById(pokemonId));

    }, [dispatch, pokemonId]);

    return (
        <section>
            {isLoading ? (
                <Container fixed>
                    <Box className="container-loading">
                        <CircularProgress sx={{
                            color: '#f7cd3b',
                        }} />
                    </Box>
                </Container>
            ) : (

                <Container className='container' fixed sx={{ padding: 12 }}>
                    <Grid container >
                        <ItemDetail
                            id={pokemonById.id}
                            title={pokemonById.name}
                            stats={pokemonById.stats}
                            pictureUrl={pokemonById.sprites.other['official-artwork'].front_default} />
                    </Grid>
                </Container>

            )}
        </section>
    );
};

export default ItemDetailContainer;

import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPokemonSelected } from "../../slices/pokemon/thunks";
import { useSelector, useDispatch } from 'react-redux'
import './styles.css'


const ItemDetailContainer = () => {

    const dispatch = useDispatch();
    const { pokemonSelected, isLoading } = useSelector(state => state.pokemon);

    const { pokemonId } = useParams();

    useEffect(() => {

        dispatch(getPokemonSelected(pokemonId));

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
                             id={pokemonSelected.id}
                            title={pokemonSelected.name}
                            stats={pokemonSelected.stats} 
                            pictureUrl={pokemonSelected.image}  
                            />
                    </Grid> 
                </Container>

            )} 
        </section>
    );
};

export default ItemDetailContainer;

import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getPokemonById } from "../../Services/connection";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import './styles.css'


const ItemDetailContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const { pokemonId } = useParams();

    useEffect(() => {

        setLoading(true);

        getPokemonById(pokemonId)
            .then((result) => setPokemon(result))
            .finally(() => setLoading(false));

    }, [pokemonId]);

    return (
        <section>
            {loading ? (
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
                            id={pokemon.id}
                            title={pokemon.name}
                            stats={pokemon.stats}
                            pictureUrl={pokemon.sprites.other['official-artwork'].front_default} />
                    </Grid>
                </Container>

            )}
        </section>
    );
};

export default ItemDetailContainer;

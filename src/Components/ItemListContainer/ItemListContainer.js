import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Grid, Pagination} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from "../../slices/pokemon/thunks";

import Item from "../Item/Item";
import './styles.css'



const ItemListContainer = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector(state => state.pokemon);

  const handleChangePage = (event, value) => {
    event.preventDefault();
    dispatch(getPokemons(value));
  }


  useEffect(() => {

    dispatch(getPokemons(page));


  }, [dispatch,page]);


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

        <Container fixed 
        sx={{ 
          padding: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         }}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            {pokemons.map(
              (pokemon, index) => {
                return (
                  <Grid item xs={12} sm={4} md={3} key={index}>
                    <Item
                      key={pokemon.id}
                      props={pokemon}
                     /*  id={pokemon.id}
                      title={pokemon.name}
                      weight={pokemon.weight}
                      height={pokemon.height}
                      types={pokemon.types}
                      pictureUrl={pokemon.image} */
                    />
                  </Grid>
                );
              }
            )}
            
          </Grid>
          <Pagination
            sx={{
              marginTop: '2rem',
            }}
            shape="rounded"
            count={40}
            defaultPage={page}
            onChange={handleChangePage}
            color="secondary" />

        </Container>


      )}
    </section>
  );
};

export default ItemListContainer;

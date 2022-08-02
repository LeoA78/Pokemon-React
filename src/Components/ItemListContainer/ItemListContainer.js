import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from "../../slices/pokemon/thunks";

import Item from "../Item/Item";
import './styles.css'



const ItemListContainer = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, /* page */ } = useSelector(state => state.pokemon);

  useEffect(() => {

    dispatch(getPokemons(0));


  }, [dispatch]);


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

        <Container fixed sx={{ padding: 12 }}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

             {pokemons.map(
            ({ id, name, image, types, weight, height }, index) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={index}>
                  <Item
                    key={id}
                    id={id}
                    title={name}
                    weight={weight}
                    height={height}
                    types={types}
                    pictureUrl={image}
                  />
                </Grid>
              );
            }
          )} 

          </Grid>
        </Container>

      )}
    </section>
  );
};

export default ItemListContainer;

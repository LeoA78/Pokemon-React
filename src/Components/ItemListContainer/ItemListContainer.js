import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { getPokemons } from "../../Services/connection";

import { Container, Grid } from "@mui/material";
import Item from "../Item/Item";
import './styles.css'

const ItemListContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true);
    /* getData()
      .then((result) => setListProducts(result))
      .catch(() => console.log("Error al traer los productos"))
      .finally(() => setLoading(false)); */

    getPokemons()
      .then((result) => setPokemons(result))
      .finally(() => setLoading(false));

   /*  console.log('Lista de Pokemones', pokemons);
 */


  }, []);

  return (
    <section>
      {loading ? (
        <Container fixed>
          <Box className="container-loading">
            <CircularProgress />
          </Box>
        </Container>
      ) : (

        <Container fixed sx={{ padding: 12 }}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            {pokemons.map(
              ({ id, name, sprites, types, weight, height}, index) => {
                return (
                  <Grid item xs={12} sm={4} md={3} key={index}>
                    <Item
                      key={id}
                      id={id}
                      title={name}
                      weight={weight}
                      height={height}
                      types={types}
                      pictureUrl={sprites.other.dream_world.front_default}
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

import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import getData from "../../Services/products";

import { Container, Grid } from "@mui/material";
import Item from "../Item/Item";
import './styles.css'

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((result) => setListProducts(result))
      .catch(() => console.log("Error al traer los productos"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      {loading ? (
        <Container  fixed>
        <Box className="container-loading">
          <CircularProgress />
        </Box>
        </Container>
      ) : (

        <Container fixed sx={{padding:12}}>
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            {listProducts.map(
              ({ id, title, price, pictureUrl, description, stock }, index) => {
                return (
                  <Grid item xs={12} sm={4} md={3} key={index}>
                    <Item
                      key={id}
                      title={title}
                      price={price}
                      pictureUrl={pictureUrl}
                      description={description}
                      stock={stock}
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

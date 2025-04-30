import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dogerblue">
          main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;

import React from 'react';
import { Grid } from '@material-ui/core';
import Header from "./components/header";


const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
    </Grid>
  );
};

export default App;

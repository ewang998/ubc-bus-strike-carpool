import React, { Component } from 'react';
import { Container, Grid, Paper, Typography, Button, Divider, AppBar, Toolbar } from '@material-ui/core';

import SelectUser from './SelectUser';

const style = {
  Paper: {
    padding: 50,
    marginTop: 150,
    elevation: 2
  }
}

export default class Welcome extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              UBC Car Pool
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm">
          <Paper style={style.Paper}>
            <Grid container spacing={10}>

              <Grid item xs={12}>
                <Typography variant="h5" align="center">
                  Select User
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <SelectUser/>
              </Grid>

            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

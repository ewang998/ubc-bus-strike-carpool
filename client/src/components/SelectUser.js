import React, { Component } from 'react';
import { Grid, Typography, Button, Divider } from '@material-ui/core';

export default class SelectUser extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Grid container spacing={5}>

        <Grid item xs={6}>
          <Button fullWidth>
            Passenger
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button fullWidth>
            Driver
          </Button>
        </Grid>

      </Grid>
    );
  }
}

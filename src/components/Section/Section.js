import React, { useState, useEffect, Component } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  CircularProgress,
  TextField,
  Select,
  InputLabel,
  Card, CardContent, CardActions, CardHeader
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  overrides: {
    // Style sheet name ⚛️
    MuiTypography: {
      // Name of the rule
      color: 'white',
      h5: {
        // Some CSS
        color: 'white',
      },
    },
  },
  card: {
    width: '100%'
  },
  header: {
    backgroundColor: theme.palette.neutral.main,
    color: theme.palette.primary.contrastText,
  },

}));


const Section = ({ children, title }) => {
  /**STYLES */
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardHeader className={classes.header} title={title} />
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

Section.propTypes = {
  history: PropTypes.object
};

export default Section;

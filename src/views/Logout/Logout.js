import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { logOut } from '../../services/api';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
  Grid,
  CircularProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 20px'
  },

}));


const Logout = props => {
  /**STYLES */
  const { className, ...rest } = props
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const classes = useStyles();
  useEffect(() => {
    logOut();
    localStorage.clear();
    setIsAuth(false);
  }, []);

  return (
    <div >
      <Grid
        container
      >
        <Grid
          item
          lg={12}
          xs={12}
        >
          <CircularProgress />
          <Redirect to='/' />
        </Grid>
      </Grid>
    </div>
  );

};

Logout.propTypes = {
  history: PropTypes.object
};

export default Logout;

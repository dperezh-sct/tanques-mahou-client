/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { NavLink as RouterLink, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import {
  // eslint-disable-next-line no-unused-vars
  Paper,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 20px',

  },
  menubutton: {
    textAlign: 'center',
    width: '280px',
    height: '80px',
    margin: '20px 10px',
  }

}));
const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const Home = props => {
  /**STYLES */
  const { className, ...rest } = props
  const classes = useStyles()
  const { isAuth } = useContext(AuthContext);
  const { empresa, setEmpresa, state, setState } = useContext(UserContext);

  useEffect(() => {
    if (isAuth && localStorage.getItem('key') && localStorage.getItem('empresa')) {
      let list = JSON.parse(localStorage.getItem('empresa'));
      setEmpresa(list[0])
    }
    if (localStorage.getItem('dataState')) {
      setState(localStorage.getItem('dataState'))
    }
  }, [state]);


  return (
    isAuth && localStorage.getItem('key') ? (
      state ? (<div className={classes.root} >
        <Button
          className={classes.menubutton}
          variant="contained"
          color="primary"
          component={CustomRouterLink}
          to={'/nueva-auditoria'}>
          Nueva auditoria
      </Button>
        <Button
          className={classes.menubutton}
          variant="contained"
          color="primary"
          component={CustomRouterLink}
          to={'/auditorias'}>
          Auditorias
      </Button>
      </div >) : (<CircularProgress disableShrink />)
    ) : (
        <Redirect to="/login" />
      )
  );
};

Home.propTypes = {
  history: PropTypes.object
};

export default Home;

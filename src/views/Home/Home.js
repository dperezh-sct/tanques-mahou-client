import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { NavLink as RouterLink, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../../contexts/AuthContext';
import {
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


  return (<div>
    {isAuth ? (
      <div className={classes.root}>
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
      </div>) : (<Redirect to="/login" />)}

  </div>
  );
};

Home.propTypes = {
  history: PropTypes.object
};

export default Home;

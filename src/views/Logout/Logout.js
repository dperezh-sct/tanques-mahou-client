import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../components/Section';
import { Redirect } from 'react-router-dom';
import {
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
  const classes = useStyles()

  useEffect(() => {
    console.log('logout-success');
  }, []);

  return <Redirect to='/' />

};

Logout.propTypes = {
  history: PropTypes.object
};

export default Logout;

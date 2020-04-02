import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../components/Section';
import {
  Paper
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


const Auditorias = props => {
  /**STYLES */
  const { className, ...rest } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Section title='Auditorias realizadas'>
        -
      </Section>
    </div>
  );
};

Auditorias.propTypes = {
  history: PropTypes.object
};

export default Auditorias;

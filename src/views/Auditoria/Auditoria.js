import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../components/Section';
import Stepper from './components/Stepper';
import { FormProvider, FormContext } from '../../contexts/FormContext';
import {
  Paper,
  Tabs,
  TextField,
  Select,
  Tab,
  FormControl,
  InputLabel,
  Dialog,
  DialogContent,
  DialogActions
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 20px'
  },
  content: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row'
  }
  ,
  formControl: {
    margin: '20px 20px',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    margin: '0px 5px'
  },
  tabs: {
    maxWidth: '100%',
    marginBottom: '20px',
  },

}));


const Auditoria = props => {
  /**STYLES */
  const { className, users, ...rest } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Stepper />
    </div>
  );
};

Auditoria.propTypes = {
  history: PropTypes.object
};

export default Auditoria;

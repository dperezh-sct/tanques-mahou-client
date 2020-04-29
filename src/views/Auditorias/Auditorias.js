import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../../contexts/AuthContext';
import { AuditoriaCard } from './components';
import {
  Paper,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 20px'
  },
  auditsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }


}));
const auditorias = [
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'pending',
    feedback: true
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'pending',
    feedback: false
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'finish',
    feedback: false
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'finish',
    feedback: false
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'finish',
    feedback: false
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'finish',
    feedback: false
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'finish',
    feedback: false
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9',
    state: 'finish',
    feedback: false
  },
];

const Auditorias = props => {
  /**STYLES */
  const { className, ...rest } = props
  const classes = useStyles()
  const { isAuth } = useContext(AuthContext);

  return (
    <div className={classes.root}>
      {isAuth ? (

        <Grid
          container
          spacing={4}
        ><Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
            {auditorias.map((auditoria) => (
              <div className={classes.auditsContainer}
                key={auditorias.indexOf(auditoria)}>
                <AuditoriaCard
                  name={auditoria.name}
                  city={auditoria.city}
                  country={auditoria.country}
                  timezone={auditoria.timezone}
                  state={auditoria.state}
                  feedback={auditoria.feedback}
                />
              </div>
            ))}
          </Grid>
        </Grid>
      ) : (<Redirect to="/login" />)}
    </div>
  );
};

Auditorias.propTypes = {
  history: PropTypes.object
};

export default Auditorias;

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../components/Section';
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
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 2',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 3',
    city: 'Madrid',
    country: 'Barcelona',
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 2',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 3',
    city: 'Madrid',
    country: 'Barcelona',
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 1',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 2',
    city: 'Madrid',
    country: 'España',
    timezone: 'GTM-9'
  },
  {
    name: 'Establecimiento 3',
    city: 'Madrid',
    country: 'Barcelona',
    timezone: 'GTM-9'
  },
];

const Auditorias = props => {
  /**STYLES */
  const { className, ...rest } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          {auditorias.map((auditoria, idx) => (
            <div className={classes.auditsContainer}>
              <AuditoriaCard
                name={auditoria.name}
                city={auditoria.city}
                country={auditoria.country}
                timezone={auditoria.timezone}
              />
            </div>
          ))}
        </Grid>

      </Grid>
    </div>
  );
};

Auditorias.propTypes = {
  history: PropTypes.object
};

export default Auditorias;

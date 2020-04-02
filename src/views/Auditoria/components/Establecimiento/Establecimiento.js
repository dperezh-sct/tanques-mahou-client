import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../../../components/Section';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  TextField,
  FormControl,
  IconButton
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  formControl: {
    margin: '10px 10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px'
  },
  inputTextNoGrow: {
    margin: '5px 5px'
  },
  buttonPhoto: {
    alignSelf: 'center',
    alignSelf: 'flex-end'
  },
  inputTextGrow1: {
    display: 'flex',
    flexGrow: '1',
    margin: '5px 5px',
    maxWidth: '25%',
  },
  inputTextGrow2: {
    display: 'flex',
    flexGrow: '2',
    margin: '5px 5px',
    maxWidth: '50%',
  },
  inputTextGrow3: {
    display: 'flex',
    flexGrow: '3',
    margin: '5px 5px',
    maxWidth: '75%',
  },
  inputTextGrow4: {
    display: 'flex',
    flexGrow: '4',
    margin: '5px 5px',
    maxWidth: '100%',
  }

}));
const ZonaDescargaCargaOptions = [
  { title: 'SI' },
  { title: 'NO' },
];
const PermisoDescargaCargaOptions = [
  { title: 'SI' },
  { title: 'NO' },
];

const Establecimiento = props => {
  /**STYLES */
  const { className, users, ...rest } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>

      <Section title='Establecimiento'>
        <FormControl variant="outlined" className={classes.formControl}>
          <div className={classes.row}>
            <div className={classes.inputTextGrow4}>Zona de carga y descarga</div>
          </div>
          <div className={classes.row}>
            <Autocomplete
              options={ZonaDescargaCargaOptions}
              getOptionLabel={option => option.title}
              className={classes.inputTextGrow2}
              renderInput={params =>
                <TextField {...params} label="Zona" variant="outlined" />
              }
            />
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label
              htmlFor="icon-button-file"
              className={classes.inputTextGrow2}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                className={classes.inputTextNoGrow}
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <Autocomplete
              options={PermisoDescargaCargaOptions}
              getOptionLabel={option => option.title}
              className={classes.inputTextGrow2}
              renderInput={params =>
                <TextField {...params} label="Permiso" variant="outlined" />
              }
            />
          </div>
          <div className={classes.row}>

          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-multiline-static"
              label="Observaciones"
              multiline
              rows="3"
              variant="outlined"
              className={classes.inputTextGrow4}
            />
          </div>

        </FormControl>

      </Section>
    </div>
  );
};

Establecimiento.propTypes = {
  history: PropTypes.object
};

export default Establecimiento;

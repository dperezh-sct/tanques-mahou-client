import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../../../components/Section';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Camera from '../Camera';
import {
  TextField,
  FormControl,
  IconButton,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
    alignItems: 'space-between',
    justifyContent: 'center'
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
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    margin: '10px 10px',
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
    maxWidth: '50%'
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
    width: '100%',
  },

}));
const Estacionamiento = props => {
  /**STYLES */
  const { className, users, ...rest } = props
  const classes = useStyles()
  const [permiso, setPermiso] = React.useState('');
  const handleChangePermiso = (event) => {
    setPermiso(event.target.value);
  };
  const [zona, setZona] = React.useState('');
  const handleChangeZona = (event) => {
    setZona(event.target.value);
  };
  const [acceso, setAcceso] = React.useState('');
  const handleChangeAcceso = (event) => {
    setAcceso(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Section title='Estacionamiento'>
        <FormControl variant="outlined" className={classes.formControl}>


          <div className={classes.row}>
            <FormControl
              variant="outlined"
              className={classes.inputTextGrow4}
            >
              <InputLabel>Zona de carga y descarga</InputLabel>
              <Select
                value={zona}
                onChange={handleChangeZona}
                label="Zona"
              >
                <MenuItem value={'SI'}>SI</MenuItem>
                <MenuItem value={'NO'}>NO</MenuItem>
              </Select>
            </FormControl>

          </div>
          <div className={classes.row}>
            <FormControl
              variant="outlined"
              className={classes.inputTextGrow4}
            >
              <InputLabel>Permiso de carga y descarga</InputLabel>
              <Select
                value={permiso}
                onChange={handleChangePermiso}
                label="Permiso"
                className={classes.selectInput}
              >
                <MenuItem value={'SI'}>SI</MenuItem>
                <MenuItem value={'NO'}>NO</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.row}>
            <Camera name='Foto de zona de carga y descarga' />
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
          <div className={classes.row}>
            <TextField
              id="outlined-multiline-static"
              label="Distancia (m)"
              variant="outlined"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <FormControl
              variant="outlined"
              className={classes.inputTextGrow4}
            >
              <InputLabel>Acceso con manguera</InputLabel>
              <Select
                value={acceso}
                onChange={handleChangeAcceso}
                label="Acceso con manguera"
              >
                <MenuItem value={'PP'}>Puerta principal</MenuItem>
                <MenuItem value={'PA'}>Puerta en almacén</MenuItem>
                <MenuItem value={'R'}>Registro</MenuItem>
                <MenuItem value={'O'}>Otro</MenuItem>
              </Select>
            </FormControl>


          </div>
          <div className={classes.row}>
            <Camera name='Foto de acceso con manguera' />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-multiline-static"
              label="Observaciones (Especificar otro)"
              multiline
              rows="3"
              variant="outlined"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-multiline-static"
              label="Metros de desnivel de camión a tanques"
              variant="outlined"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-multiline-static"
              label="Metros de desnivel de tanques a barra"
              variant="outlined"
              className={classes.inputTextGrow4}
            />
          </div>
        </FormControl>
      </Section>
    </div>
  );
};

Estacionamiento.propTypes = {
  history: PropTypes.object
};

export default Estacionamiento;

import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../../../components/Section';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
  Grid,
  TextField,
  FormControl,
  IconButton,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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



const Local = props => {
  /**STYLES */
  const { className, ...rest } = props
  const classes = useStyles()
  // The first commit of Material-UI
  const [selectedDateVisita, setSelectedDateVisita] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChangeVisita = (date) => {
    setSelectedDate(date);
  };
  const [selectedDateAlta, setSelectedDateAlta] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChangeAlta = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <Section title='Datos del local'>
        <FormControl variant="outlined" className={classes.formControl}>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Nombre establecimiento"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow3}
            />
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label
              htmlFor="icon-button-file"
              className={classes.inputTextGrow1}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                className={classes.inputTextNoGrow}
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Nombre empresa"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Código del cliente"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow2}
            />
            <TextField
              id="outlined-secondary"
              label="NIF/CIF."
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow2}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Empresa STP"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Dirección"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardDatePicker
                className={classes.inputTextGrow4}
                disableToolbar
                variant="outlined"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                margin="normal"
                label="Fecha de visita"
                value={selectedDateVisita}
                onChange={handleDateChangeVisita}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.row}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
              <KeyboardDatePicker
                allowKeyboardControl={false}
                className={classes.inputTextGrow4}
                disableToolbar
                variant="outlined"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                margin="normal"
                label="Fecha de alta"
                value={selectedDateAlta}
                onChange={handleDateChangeAlta}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Ciudad"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="CP"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow1}
            />
            <TextField
              id="outlined-secondary"
              label="Provincia"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow3}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Teléfono"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow4}
            />
          </div>
          <div className={classes.row}>
            <TextField
              id="outlined-secondary"
              label="Email"
              variant="outlined"
              color="#f44336"
              className={classes.inputTextGrow4}
            />
          </div>
        </FormControl>
      </Section>
    </div>
  );
};

Local.propTypes = {
  history: PropTypes.object
};

export default Local;

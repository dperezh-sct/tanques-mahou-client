import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import { AuthContext } from '../../contexts/AuthContext';
import { FormProvider } from '../../contexts/FormContext';

import Stepper from './components/Stepper';

const Auditoria = props => {
  /**STYLES */
  const { className, users, ...rest } = props
  const classes = useStyles();
  const { isAuth } = useContext(AuthContext);

  return (
    <div>
      {isAuth && localStorage.getItem('key') ? (
        <FormProvider>
          <div className={classes.root}>
            <Stepper />
          </div>

        </FormProvider>) : (
          <Redirect to="/login" />
        )
      }
    </div>
  )
};

Auditoria.propTypes = {
  history: PropTypes.object
};

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
export default Auditoria;

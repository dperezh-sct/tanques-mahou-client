import React, { useState, useEffect, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Typography,
  Snackbar,
  CardMedia
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Alert } from '@material-ui/lab/';


const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBody: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 10px',
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(1)
  },
  textField: {
    marginTop: theme.spacing(1),
    width: '100%'
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  },
  alert: {
    position: 'fixed',
    left: '60%',
    bottom: '10%',
    minWidth: '300px'
  },
  logoBox: {
    padding: '0px 30px',
  },
  media: {
    width: '100%'
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));



const SignIn = props => {

  const { history } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    username: '',
    email: '',
    password: ''

  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  /** 
    const handleBack = () => {
      history.goBack();
    };
  
    <div className={classes.contentHeader}>
    <IconButton onClick={handleBack}>
      <ArrowBackIcon />
    </IconButton>
  </div>
  */
  function handleClick() {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = () => {
    console.log("asdasd")
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.content}
          item
          lg={12}
          xs={12}
        >
          <div className={classes.logoBox}>
            <img
              className={classes.media}
              src="/images/mahou-nc-lg@2x.png"
            />
          </div>
          <div className={classes.contentBody}>
            <form
              className={classes.form}
              onSubmit={handleSignIn}
            >
              <Typography
                className={classes.title}
                variant="h2"
              >
                Sign in
                </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                Sign in with email address
                </Typography>

              <TextField
                className={classes.textField}
                error={hasError('email')}
                fullWidth
                helperText={
                  hasError('email') ? formState.errors.email[0] : null
                }
                label="Email address"
                name="email"
                onChange={handleChange}
                type="text"
                value={formState.values.email || ''}
                variant="outlined"
                id="outlined-required"
              />
              <TextField
                className={classes.textField}
                error={hasError('password')}
                fullWidth
                helperText={
                  hasError('password') ? formState.errors.password[0] : null
                }
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                value={formState.values.password || ''}
                variant="outlined"
              />
              <Button
                className={classes.signInButton}
                color="primary"
                disabled={!formState.isValid}
                fullWidth
                size="large"
                variant="contained"
                component={CustomRouterLink}
                to={'/home'}
              >
                Sign in
                </Button>
            </form>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} >
              <Alert className={classes.alert} onClose={handleClose} severity="error">Incorrect email or password</Alert>
            </Snackbar>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default SignIn;

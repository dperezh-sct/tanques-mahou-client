import React, { useState, useEffect, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import { logIn } from '../../services/api';
import { refresh } from '../../helpers/Data/getData';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import { Grid, Button, TextField, Typography, Snackbar } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Alert } from '@material-ui/lab/';

const schema = {
	password: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {
			maximum: 128
		}
	}
};

const useStyles = makeStyles((theme) => ({
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
		alignItems: 'center'
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
	alert: {},
	logoBox: {
		padding: '0px 30px'
	},
	media: {
		width: '100%'
	}
}));

const SignIn = (props) => {
	const { history } = props;
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);
	const [ username, setUserName ] = useState('');
	const [ formState, setFormState ] = useState({
		isValid: false,
		values: {},
		touched: {},
		errors: {},
		username: '',
		email: '',
		password: ''
	});
	const { setIsAuth } = useContext(AuthContext);

	useEffect(
		() => {
			const errors = validate(formState.values, schema);
			setFormState((formState) => ({
				...formState,
				isValid: errors ? false : true,
				errors: errors || {}
			}));
		},
		[ formState.values ]
	);

	function handleChangeUsername(input) {
		setUserName(input);
	}
	function handleClick() {
		setOpen(true);
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const handleChange = (event) => {
		event.persist();

		setFormState((formState) => ({
			...formState,
			values: {
				...formState.values,
				[event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
			},
			touched: {
				...formState.touched,
				[event.target.name]: true
			}
		}));
	};

	const handleLogIn = (event) => {
		event.preventDefault();
		logIn(username, formState.values.password)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				if (json['key'] != null) {
					localStorage.setItem('username', username);
					localStorage.setItem('key', json['key']);
					setIsAuth(true);
					refresh();
					history.push('/');
				} else {
					handleClick();
				}
			})
			.catch((error) => {
				console.log('Error(sign-in):' + error.message);
			});
	};

	const hasError = (field) => (formState.touched[field] && formState.errors[field] ? true : false);

	return (
		<div className={classes.root}>
			<Grid className={classes.grid} container>
				<Grid className={classes.content} item lg={12} xs={12}>
					<div className={classes.logoBox}>
						<img className={classes.media} src="/images/mahou-nc-lg@2x.png" />
					</div>
					<div className={classes.contentBody}>
						<form className={classes.form} onSubmit={handleLogIn}>
							<Typography className={classes.title} variant="h2">
								Inicio de sesión
							</Typography>
							<Typography color="textSecondary" gutterBottom>
								Inicia sesión con tu código
							</Typography>

							<TextField
								className={classes.textField}
								fullWidth
								label="Código de técnico"
								name="name"
								onChange={(event) => handleChangeUsername(event.target.value)}
								type="number"
								variant="outlined"
								value={username}
								id="outlined-required"
							/>
							<TextField
								className={classes.textField}
								error={hasError('password')}
								fullWidth
								helperText={hasError('password') ? formState.errors.password[0] : null}
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
								fullWidth
								size="large"
								type="submit"
								variant="contained"
							>
								Ingresar
							</Button>
							<Snackbar
								className={classes.alert}
								open={open}
								autoHideDuration={4000}
								onClose={handleClose}
							>
								<Alert variant="filled" onClose={handleClose} severity="error">
									Incorrect email or password
								</Alert>
							</Snackbar>
						</form>
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

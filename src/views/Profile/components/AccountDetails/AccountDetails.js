import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { UserContext } from '../../../../contexts/UserContext';
import { Card, CardHeader, CardContent, CardActions, Divider, Grid, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {}
}));

const AccountDetails = (props) => {
	const { className, ...rest } = props;
	const classes = useStyles();

	const [ emailTemp, setEmailTemp ] = useState('');
	const [ firstNameTemp, setFirstNameTemp ] = useState('');
	const [ lastNameTemp, setLastNameTemp ] = useState('');
	const { email, setEmail, firstName, setFirstName, lastName, setLastName, username, setUsername } = useContext(
		UserContext
	);

	const handleChangeFirstName = (event) => {
		setFirstNameTemp(event.target.value);
	};
	const handleChangeLastName = (event) => {
		setLastNameTemp(event.target.value);
	};
	const handleChangeEmail = (event) => {
		setEmailTemp(event.target.value);
	};
	const handleSubmit = (event) => {
		if (firstName == '' || lastName == '' || email == '') {
			console.log('data is empty');
		} else {
			setEmail(emailTemp);
			setFirstName(firstNameTemp);
			setLastName(lastNameTemp);
		}
	};

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<form onSubmit={handleSubmit}>
				<CardHeader subheader="La información puede ser modificada" title="Perfil" />
				<Divider />
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								helperText="Porfavor ingresar su nombre"
								label="Nombre"
								margin="dense"
								name="Nombre"
								onChange={handleChangeFirstName}
								required
								value={firstNameTemp}
								variant="outlined"
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Apellido"
								margin="dense"
								name="apellido"
								onChange={handleChangeLastName}
								required
								value={lastNameTemp}
								variant="outlined"
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label="Correo electronico"
								margin="dense"
								name="email"
								onChange={handleChangeEmail}
								required
								value={emailTemp}
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardActions>
					<Button color="primary" variant="contained" type="submit" severity="error">
						Guardar cambios
					</Button>
				</CardActions>
			</form>
		</Card>
	);
};

AccountDetails.propTypes = {
	className: PropTypes.string
};

export default AccountDetails;

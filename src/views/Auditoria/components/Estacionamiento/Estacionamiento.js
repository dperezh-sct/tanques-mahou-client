import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import Section from '../../../../components/Section';
import Camera from '../../../../components/Camera';
import { TextField, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { AuthContext } from '../../../../contexts/AuthContext';
import { FormContext } from '../../../../contexts/FormContext';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
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
		margin: '10px 10px'
	},
	inputTextGrow1: {
		display: 'flex',
		flexGrow: '1',
		margin: '5px 5px',
		maxWidth: '25%'
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
		maxWidth: '75%'
	},
	inputTextGrow4: {
		display: 'flex',
		flexGrow: '4',
		margin: '5px 5px',
		width: '100%'
	}
}));
const Estacionamiento = (props) => {
	/**STYLES */
	const { className, ...rest } = props;
	const classes = useStyles();
	const { isAuth } = useContext(AuthContext);

	const [ accesoOp, setAccesoOp ] = useState([]);

	const {
		zonaCargaDescarga,
		setZonaCargaDescarga,
		permisoCargaDescarga,
		setPermisoCargaDescarga,
		photoCargaDescarga,
		setPhotoCargaDescarga,
		accesoManguera,
		setAccesoManguera,
		obs1Estacionamiento,
		setObs1Estacionamiento,
		distancia,
		setDistancia,
		photoAccesoManguera,
		setPhotoAccesoManguera,
		obs2Estacionamiento,
		setObs2Estacionamiento,
		desnivelCamionTanque,
		setDesnivelCamionTanque,
		desnivelTanqueCamion,
		setDesnivelTanqueCamion
	} = useContext(FormContext);

	const handleChangePermiso = (event) => {
		setPermisoCargaDescarga(event.target.value);
	};
	const handleChangeZona = (event) => {
		setZonaCargaDescarga(event.target.value);
	};
	const handleObs1 = (event) => {
		setObs1Estacionamiento(event.target.value);
	};
	const handleDistancia = (event) => {
		setDistancia(event.target.value);
	};
	const handleChangeAccesoManguera = (event) => {
		setAccesoManguera(event.target.value);
	};
	const handleObs2 = (event) => {
		setObs2Estacionamiento(event.target.value);
	};
	const handleDesnivelCamionTanque = (event) => {
		setDesnivelCamionTanque(event.target.value);
	};
	const handleDesnivelTanqueCamion = (event) => {
		setDesnivelTanqueCamion(event.target.value);
	};

	useEffect(() => {
		if (isAuth) {
			setAccesoOp(JSON.parse(localStorage.getItem('accesoManguera')));
		}
	}, []);

	return (
		<div className={classes.root}>
			{isAuth ? (
				<Section title="Estacionamiento">
					<FormControl variant="outlined" className={classes.formControl}>
						<div className={classes.row}>
							<Camera name="Foto de zona de carga y descarga" />
						</div>
						<div className={classes.row}>
							<FormControl variant="outlined" className={classes.inputTextGrow4}>
								<InputLabel>Zona de carga y descarga</InputLabel>
								<Select
									value={zonaCargaDescarga}
									onChange={handleChangeZona}
									label="Zona de carga y descarga"
								>
									<MenuItem value={'SI'}>SI</MenuItem>
									<MenuItem value={'NO'}>NO</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div className={classes.row}>
							<FormControl variant="outlined" className={classes.inputTextGrow4}>
								<InputLabel>Permiso de carga y descarga</InputLabel>
								<Select
									value={permisoCargaDescarga}
									onChange={handleChangePermiso}
									label="Permiso de carga y descarga"
									className={classes.selectInput}
								>
									<MenuItem value={'SI'}>SI</MenuItem>
									<MenuItem value={'NO'}>NO</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div className={classes.row}>
							<TextField
								id="outlined-multiline-static"
								label="Observaciones"
								multiline
								rows="3"
								variant="outlined"
								className={classes.inputTextGrow4}
								value={obs1Estacionamiento}
								onChange={(event) => handleObs1(event)}
							/>
						</div>
						<div className={classes.row}>
							<TextField
								id="outlined-multiline-static"
								label="Distancia (m)"
								variant="outlined"
								type="number"
								className={classes.inputTextGrow4}
								value={distancia}
								onChange={handleDistancia}
							/>
						</div>
						<div className={classes.row}>
							<Camera name="Foto de acceso con manguera" />
						</div>
						<div className={classes.row}>
							<FormControl variant="outlined" className={classes.inputTextGrow4}>
								<InputLabel>Acceso con manguera</InputLabel>
								<Select
									value={accesoManguera}
									onChange={handleChangeAccesoManguera}
									label="Acceso con manguera"
								>
									{accesoOp.map((item) => (
										<MenuItem key={accesoOp.indexOf(item)} value={item}>
											{item}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</div>
						<div className={classes.row}>
							<TextField
								id="outlined-multiline-static"
								label="Observaciones (Especificar otro)"
								multiline
								rows="3"
								variant="outlined"
								className={classes.inputTextGrow4}
								value={obs2Estacionamiento}
								onChange={(event) => handleObs2(event)}
							/>
						</div>
						<div className={classes.row}>
							<TextField
								id="outlined-multiline-static"
								label="Metros de desnivel de camión a tanques"
								variant="outlined"
								type="number"
								className={classes.inputTextGrow4}
								value={desnivelCamionTanque}
								onChange={(event) => handleDesnivelCamionTanque(event)}
							/>
						</div>
						<div className={classes.row}>
							<TextField
								id="outlined-multiline-static"
								label="Metros de desnivel de tanques a barra"
								variant="outlined"
								type="number"
								className={classes.inputTextGrow4}
								value={desnivelTanqueCamion}
								onChange={(event) => handleDesnivelTanqueCamion(event)}
							/>
						</div>
					</FormControl>
				</Section>
			) : (
				<Redirect to="/login" />
			)}
		</div>
	);
};

Estacionamiento.propTypes = {
	history: PropTypes.object
};

export default Estacionamiento;

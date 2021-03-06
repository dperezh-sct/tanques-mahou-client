import React, { useState, useEffect, useContext, useCallback } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { getEstablecimientos, getDatosEstablecimiento } from '../../../../services/api';
import { FormContext } from '../../../../contexts/FormContext';
import { UserContext } from '../../../../contexts/UserContext';
import Section from '../../../../components/Section';
import Camera from '../../../../components/Camera';

import { Grid, TextField, FormControl, IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
	root: {
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
		alignSelf: 'center',
		alignSelf: 'flex-end'
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
		maxWidth: '100%'
	}
}));

const Local = (props) => {
	/**STYLES */
	const { className, ...rest } = props;
	const classes = useStyles();

	const [value, setValue] = useState({});

	const { empresa } = useContext(UserContext);
	const [establecimientos, setEstablecimientos] = useState([]);
	const {
		nombreEstab,
		setNombreEstab,
		fotoLocal,
		setFotoLocal,
		nombreEmpresa,
		setNombreEmpresa,
		codigoCliente,
		setCodigoCliente,
		nifCif,
		setNifCif,
		empresaSTP,
		setEmpresaSTP,
		direccion,
		setDireccion,
		fechaVisita,
		setFechaVisita,
		fechaAlta,
		setFechaAlta,
		ciudad,
		setCiudad,
		cp,
		setCP,
		provincia,
		setProvincia,
		telefono,
		setTelefono,
		correo,
		setCorreo
	} = useContext(FormContext);

	const handleAutocomplete = (event, newValue) => {
		GetEstablecimientos(event.target.value, 'search');
		setNombreEstab(newValue);
	};
	const handleFotoLocal = (file) => {
		setFotoLocal(file);
	};
	const handleNombreEmpresa = (event, newValue) => {
		setNombreEmpresa(newValue);
	};
	const handleCodigoCliente = (event) => {
		setCodigoCliente(event.target.value);
	};
	const handleNifCif = (event) => {
		setNifCif(event.target.value);
	};
	const handleEmpresaSTP = (event) => {
		setEmpresaSTP(event.target.value);
	};
	const handleDireccion = (event) => {
		setDireccion(event.target.value);
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleDateChangeVisita = useCallback(() => {
		let d = new Date();
		setFechaVisita(new Date(d));
	});
	const handleDateChangeAlta = (date) => {
		setFechaAlta(new Date(date));
	};
	const handleCiudad = (event) => {
		setCiudad(event.target.value);
	};
	const handleTelefono = (event) => {
		setTelefono(event.target.value);
	};
	const handleCP = (event) => {
		setCP(event.target.value);
	};
	const handleProvincia = (event) => {
		setProvincia(event.target.value);
	};
	const handleCorreo = (event) => {
		setCorreo(event.target.value);
	};

	const setDatos = (json) => {
		setCodigoCliente(json.codigo_cliente);
		setNifCif(json.codigo_cliente);
		setEmpresaSTP(empresa.nombre);
		setDireccion(json.direccion);
		setCiudad(json.ciudad);
		setCP(json.cp);
		setProvincia(json.provincia);
		setTelefono(json.telefono);
		setCorreo(json.email);
	};

	const GetEstablecimientos = (typing, search) => {
		getEstablecimientos(typing, search)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				setEstablecimientos(json);
			})
			.catch((error) => {
				console.log('Error(empresas):' + error.message);
			});
	};
	const GetDatosEstablecimiento = (id) => {
		getDatosEstablecimiento(id)
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log('json establecimiento obtenido');
				console.log(json);
				setDatos(json);
			})
			.catch((error) => {
				console.log('Error(empresas):' + error.message);
			});
	};

	useEffect(() => {
		handleDateChangeVisita();
	}, []);

	return (
		<div className={classes.root}>
			<Section title="Datos del local">
				<FormControl variant="outlined" className={classes.formControl}>
					<div className={classes.row}>
						<Camera name="Foto de fachada del local" />
					</div>
					<div className={classes.row}>
						<Autocomplete
							disableClearable
							noOptionsText="No existe"
							id="establecimiento-autocomplete"
							className={classes.inputTextGrow4}
							getOptionLabel={(option) => option.nombre}
							options={establecimientos}
							renderOption={(option) => option.nombre + '' + option.id}
							onInputChange={(event, newValue) => {
								handleAutocomplete(event, newValue);
							}}
							onChange={(e, newValue) => {
								setValue(newValue);
								GetDatosEstablecimiento(newValue.id);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Nombre establecimiento"
									margin="normal"
									variant="outlined"
									value={nombreEstab}
									InputProps={{
										...params.InputProps
									}}
								/>
							)}
						/>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="Nombre de empresa"
							variant="outlined"
							className={classes.inputTextGrow4}
							value={empresaSTP}
							onChange={handleEmpresaSTP}
						/>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="Código del cliente"
							variant="outlined"
							className={classes.inputTextGrow2}
							value={codigoCliente}
							onChange={handleCodigoCliente}
						/>
						<TextField
							id="outlined-secondary"
							label="NIF/CIF."
							variant="outlined"
							className={classes.inputTextGrow2}
							value={nifCif}
							onChange={handleNifCif}
						/>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="Dirección"
							variant="outlined"
							className={classes.inputTextGrow4}
							value={direccion}
							onChange={handleDireccion}
						/>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="Empresa STP"
							variant="outlined"
							className={classes.inputTextGrow4}
							value={empresa}
							onChange={(e, newValue) => handleNombreEmpresa(e, newValue)}
							disabled
						/>
					</div>
					<div className={classes.row}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								className={classes.inputTextGrow4}
								disableToolbar
								variant="outlined"
								inputVariant="outlined"
								format="MM/dd/yyyy"
								margin="normal"
								label="Fecha de visita"
								value={fechaVisita}
							/>
						</MuiPickersUtilsProvider>
					</div>
					<div className={classes.row}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								allowKeyboardControl={false}
								className={classes.inputTextGrow4}
								disableToolbar
								variant="outlined"
								inputVariant="outlined"
								format="MM/dd/yyyy"
								margin="normal"
								label="Fecha de alta"
								value={fechaAlta}
								onChange={handleDateChangeAlta}
								KeyboardButtonProps={{
									'aria-label': 'change date'
								}}
							/>
						</MuiPickersUtilsProvider>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="Ciudad"
							variant="outlined"
							className={classes.inputTextGrow4}
							value={ciudad}
							onChange={handleCiudad}
						/>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="CP"
							variant="outlined"
							className={classes.inputTextGrow1}
							value={cp}
							onChange={handleCP}
						/>
						<TextField
							id="outlined-secondary"
							label="Provincia"
							variant="outlined"
							className={classes.inputTextGrow3}
							value={provincia}
							onChange={handleProvincia}
						/>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="Teléfono"
							variant="outlined"
							className={classes.inputTextGrow4}
							value={telefono}
							onChange={handleTelefono}
						/>
					</div>
					<div className={classes.row}>
						<TextField
							id="outlined-secondary"
							label="Correo"
							variant="outlined"
							className={classes.inputTextGrow4}
							value={correo}
							onChange={handleCorreo}
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

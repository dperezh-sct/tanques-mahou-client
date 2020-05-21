import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Camera } from '../../../../../../components';

import { AuthContext } from '../../../../../../contexts/AuthContext';
import { FormContext } from '../../../../../../contexts/FormContext';

import {
	FormControl,
	TextField,
	Select,
	Button,
	MenuItem,
	InputLabel,
	Typography,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions
} from '@material-ui/core';

function getGaleryItem(step) {
	return (
		<Card>
			<CardMedia
				component="img"
				alt={galeryNames[step]}
				image={'/images/' + galery[step]}
				title={galeryNames[step]}
			/>
		</Card>
	);
}

const situacionOp = [ 'Visto (zona clientes)', 'No visto' ];
const automaticoOp = [ 'SI', 'NO' ];
const alarmaOp = [ 'SI', 'NO' ];
const certificadoOp = [ 'SI', 'NO' ];
const galery = [
	'Planos_Mahou.png',
	'estandar_horizontal.png',
	'estandar_vertical.png',
	'estandar_L.png',
	'estandar_piramidal.png',
	'estandar_contrapeada.png',
	'especial_colgados.png',
	'vertical_en_suelo.png',
	'vertical_sobre_estructura.png',
	'estandar_avanzada.png'
];
const galeryNames = [
	'Plano completo',
	'Estandar horizontal',
	'Estandar vertical',
	'Estandar L',
	'Estandar piramidal',
	'Estandar contrapesada',
	'Especial colgados',
	'Vertical en suelo',
	'Vertical sobre estructura',
	'Estandar avanzada'
];

const Otros = (props) => {
	/**STYLES */
	const { className, ...rest } = props;
	const classes = useStyles();

	const [ tipoOp, setTipoOp ] = useState([]);
	const [ estructuraOp, setEstructuraOp ] = useState([]);

	const { isAuth } = useContext(AuthContext);

	const {
		enfriadores,
		setEnfriadores,
		situacion,
		setSituacion,
		fotoUbicacionTanques,
		setFotoUbicacionTanques,
		sistema,
		setSistema,
		tipoSistemaTanques,
		setTipoSistemaTanques,
		alarma,
		setAlarma,
		temperatura,
		setTemperatura,
		fotoSituacion,
		setFotoSituacion,
		estructuraTanque,
		setEstructuraTanque,
		certificadoTanques,
		setCertificadoTanques,
		observacionesTanques,
		setObservacionesTanques,
		compresores,
		setCompresores
	} = useContext(FormContext);

	const [ currentgalery, setCurrentgalery ] = useState(-1);
	const handleChangeCurrentgalery = (input) => {
		try {
			setCurrentgalery(input);
		} catch (error) {
			this.setState({ error });
		}
	};

	const handleChangeSituacion = (event) => {
		setSituacion(event.target.value);
	};
	const handleChangeSistema = (event) => {
		setSistema(event.target.value);
	};
	const handleChangeTipo = (event) => {
		setTipoSistemaTanques(event.target.value);
	};
	const handleChangeAlarma = (event) => {
		setAlarma(event.target.value);
	};
	const handleChangeTemperatura = (event) => {
		setTemperatura(event.target.value);
	};
	const handleChangeEstructura = (event) => {
		setEstructuraTanque(event.target.value);
	};
	const handleChangeCertificado = (event) => {
		setCertificadoTanques(event.target.value);
	};
	const handleChangeObservaciones = (event) => {
		setObservacionesTanques(event.target.value);
	};

	/**plano */
	const [ open, setOpen ] = React.useState(false);
	const handleShowPlano = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		setTipoOp(JSON.parse(localStorage.getItem('tipoSistemaTanques')));
		setEstructuraOp(JSON.parse(localStorage.getItem('estructuraTanque')));
	}, []);

	return (
		<div className={classes.root}>
			<div className={classes.headerItemsBox}>
				<Typography className={classes.headingHeader}>Otros</Typography>
			</div>
			<div className={classes.form}>
				<div className={classes.row}>
					<Camera name="Foto de ubicación (Tanques)" />
				</div>
				<div className={classes.row}>
					<FormControl variant="outlined" className={classes.inputTextGrow4}>
						<InputLabel>Situación de los tanques</InputLabel>
						<Select
							value={situacion}
							onChange={(event) => handleChangeSituacion(event)}
							label="Situación de los tanques"
						>
							{situacionOp.map((item) => (
								<MenuItem key={situacionOp.indexOf(item)} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div className={classes.row}>
					<FormControl variant="outlined" className={classes.inputTextGrow4}>
						<InputLabel>Sistema automático</InputLabel>
						<Select
							value={sistema}
							onChange={(event) => handleChangeSistema(event)}
							label="Sistema automático"
						>
							{automaticoOp.map((item) => (
								<MenuItem key={automaticoOp.indexOf(item)} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div className={classes.row}>
					<FormControl variant="outlined" className={classes.inputTextGrow4}>
						<InputLabel>Tipo</InputLabel>
						<Select value={tipoSistemaTanques} onChange={(event) => handleChangeTipo(event)} label="Tipo">
							{tipoOp.map((item) => (
								<MenuItem key={tipoOp.indexOf(item)} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<div className={classes.row}>
					<Camera name="Situacion de la alarma (Tª)" />
				</div>
				<div className={classes.row}>
					<FormControl variant="outlined" className={classes.inputTextGrow4}>
						<InputLabel>Alarma</InputLabel>
						<Select value={alarma} onChange={(event) => handleChangeAlarma(event)} label="Alarma">
							{alarmaOp.map((item) => (
								<MenuItem key={alarmaOp.indexOf(item)} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<TextField
						id="outlined-multiline-static"
						label="Tª(Cº)"
						variant="outlined"
						className={classes.inputTextGrow2}
						value={temperatura}
						onChange={handleChangeTemperatura}
					/>
				</div>
				<div className={classes.row}>
					<FormControl variant="outlined" className={classes.inputTextGrow3}>
						<InputLabel>Estructura</InputLabel>
						<Select
							value={estructuraTanque}
							onChange={(event) => handleChangeEstructura(event)}
							label="Estructura"
						>
							{estructuraOp.map((item) => (
								<MenuItem key={estructuraOp.indexOf(item)} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<img
						onClick={(event) => handleShowPlano(event)}
						className={classes.inputPhotoGrow1}
						src="/images/Planos_Mahou.png"
					/>
				</div>
				<div className={classes.row}>
					<FormControl variant="outlined" className={classes.inputTextGrow4} disabled>
						<InputLabel>Certificado</InputLabel>
						<Select
							value={certificadoTanques}
							onChange={(event) => handleChangeCertificado(event)}
							label="Estructura"
						>
							{certificadoOp.map((item) => (
								<MenuItem key={certificadoOp.indexOf(item)} value={item}>
									{item}
								</MenuItem>
							))}
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
						value={observacionesTanques}
						onChange={handleChangeObservaciones}
					/>
				</div>
			</div>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Planos de los modelos de tanques'}</DialogTitle>
				<DialogContent>
					{currentgalery == -1 ? (
						<div className={classes.galeryBox}>
							{galery.map((image) => (
								<Card key={galery.indexOf(image)} className={classes.galeryItem}>
									<CardMedia component="img" alt="" image={'/images/' + image} title="" />
									<CardContent>
										<Typography gutterBottom variant="h6">
											{galeryNames[galery.indexOf(image)]}
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											onClick={() => handleChangeCurrentgalery(galery.indexOf(image))}
											size="small"
											color="primary"
										>
											Ver
										</Button>
									</CardActions>
								</Card>
							))}
						</div>
					) : (
						<div>{getGaleryItem(currentgalery)}</div>
					)}
				</DialogContent>
				{currentgalery == -1 ? (
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cerrar
						</Button>
					</DialogActions>
				) : (
					<DialogActions>
						<Button onClick={() => handleChangeCurrentgalery(-1)}>Atrás</Button>
						<Button onClick={handleClose} color="primary">
							Cerrar
						</Button>
					</DialogActions>
				)}
			</Dialog>
		</div>
	);
};

Otros.propTypes = {
	history: PropTypes.object
};

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '10px 10px'
	},
	form: {
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'space-aroud'
	},
	overrides: {
		// Style sheet name ⚛️
		MuiTypography: {
			// Name of the rule
			color: 'white',
			h5: {
				// Some CSS
				color: 'white'
			}
		}
	},
	card: {
		width: '100%'
	},
	header: {
		backgroundColor: theme.palette.neutral.main,
		color: theme.palette.primary.contrastText
	},
	headerItemsBox: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	input: {
		display: 'none',
		alignItems: 'center',
		justifyContent: 'center'
	},
	row: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'space-between',
		justifyContent: 'center'
	},
	rowCenter: {
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
	},
	headingProduct: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
		alignSelf: 'center'
	},
	headingHeader: {
		alignSelf: 'center'
	},
	delete: {
		marginRight: '10px',
		color: theme.palette.primary.main
	},
	add: {
		color: theme.palette.success.main,
		fontSize: '20px'
	},
	inputPhotoGrow1: {
		display: 'flex',
		flexGrow: '1',
		margin: '8px 8px',
		maxWidth: '50px',
		maxHeight: '50px',
		borderRadius: '8px',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	galeryBox: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	galeryItem: {
		alignSelf: 'center',
		maxWidth: '40%',
		margin: '10px 10px'
	}
}));

export default Otros;

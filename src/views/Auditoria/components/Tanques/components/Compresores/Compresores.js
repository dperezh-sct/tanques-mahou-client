import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Camera } from '../../../../../../components';
import {
	FormControl,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Typography,
	IconButton,
	Divider
} from '@material-ui/core';

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
	}
}));

const modelosOp = [ '20 L', '50 L', '120 L', '272 L', 'OTRO (Anotar en observaciones)' ];
const certificadoOp = [ 'SI', 'NO' ];

const Compresores = (props) => {
	/**STYLES */
	const { className, ...rest } = props;
	const classes = useStyles();

	const [ modelos, setModelos ] = useState([]);
	const handleChangeModelo = (event, id) => {
		let newmodelos = [ ...modelos ];
		newmodelos[id] = event.target.value;
		setModelos(newmodelos);
	};
	const [ certificados, setCertificados ] = useState([]);
	const handleChangeCertificados = (event, id) => {
		let newcertificados = [ ...certificados ];
		newcertificados[id] = event.target.value;
		setCertificados(newcertificados);
	};
	const [ compresores, setCompresores ] = useState([ 0 ]);
	const handleAdd = () => {
		let newcompresores = [ ...compresores ];
		let init = [ 0 ];
		if (newcompresores.length == 0) {
			newcompresores = [ ...init ];
		} else {
			newcompresores.push(newcompresores[newcompresores.length - 1] + 1);
		}
		setCompresores(newcompresores);
	};
	const handleDelete = (id) => {
		let temp = [ ...compresores ];
		let newcompresores = [];
		newcompresores = temp.filter((e) => {
			return e != id;
		});
		setCompresores(newcompresores);
	};

	useEffect(() => {}, [ compresores ]);

	return (
		<div className={classes.root}>
			<div className={classes.headerItemsBox}>
				<Typography className={classes.headingHeader}>compresores</Typography>
				<IconButton className={classes.add} onClick={() => handleAdd()}>
					<AddCircleIcon />
				</IconButton>
			</div>
			<Divider />
			{compresores.length == 0 ? (
				<div>
					<Typography align="center" className={classes.headingProduct}>
						No existen compresores a crear
					</Typography>
				</div>
			) : (
				<div>
					{compresores.map((compresor) => (
						<ExpansionPanel key={compresores.indexOf(compresor)}>
							<ExpansionPanelSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<div className={classes.rowCenter}>
									<IconButton
										aria-label="delete"
										className={classes.delete}
										onClick={(event) => {
											event.stopPropagation(), handleDelete(compresor);
										}}
										onFocus={(event) => event.stopPropagation()}
									>
										<DeleteIcon fontSize="small" />
									</IconButton>
									<Typography align="center" className={classes.headingProduct}>
										compresor {'' + (compresor + 1)}
									</Typography>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<div className={classes.form}>
									<div className={classes.row}>
										<Camera name="Foto ubicación  compresor" />
									</div>
									<div className={classes.row}>
										<Camera name="Foto de regulación de presión del compresor" />
									</div>
									<div className={classes.row}>
										<FormControl variant="outlined" className={classes.inputTextGrow4}>
											<InputLabel>Modelo de compresor</InputLabel>
											<Select
												value={modelos[compresores.indexOf(compresor)]}
												onChange={(event) =>
													handleChangeModelo(event, compresores.indexOf(compresor))}
												label="Codigo de producto"
											>
												{modelosOp.map((item) => (
													<MenuItem key={modelosOp.indexOf(item)} value={item}>
														{item}
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</div>
									<div className={classes.row}>
										<Camera name="Foto Nº de Serie" />
									</div>
									<div className={classes.row}>
										<TextField
											id="outlined-multiline-static"
											label="Nº de Serie"
											variant="outlined"
											className={classes.inputTextGrow4}
										/>
									</div>
									<div className={classes.row}>
										<Camera name="Foto Nº de Calderín" />
									</div>
									<div className={classes.row}>
										<TextField
											id="outlined-multiline-static"
											label="Nº de Calderín"
											variant="outlined"
											className={classes.inputTextGrow4}
										/>
									</div>
									<div className={classes.row}>
										<FormControl variant="outlined" className={classes.inputTextGrow4}>
											<InputLabel>Certificado</InputLabel>
											<Select
												value={certificados[compresores.indexOf(compresor)]}
												onChange={(event) =>
													handleChangeCertificados(event, compresores.indexOf(compresor))}
												label="Certificado"
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
										<Camera name="Foto del manorreductor de pared" />
									</div>
									<div className={classes.row}>
										<Camera name="Foto de manorreductor neumática" />
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
								</div>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					))}
				</div>
			)}
		</div>
	);
};

Compresores.propTypes = {
	history: PropTypes.object
};

export default Compresores;

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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

const modelosOp = [ 'V50', 'V75', 'V100', 'V200', 'V400', 'H100', 'H200' ];

const Enfriadores = (props) => {
	/**STYLES */
	const { className, id, ...rest } = props;
	const classes = useStyles();

	const [ modelos, setModelos ] = useState([]);
	const handleChangeModelo = (event, id) => {
		let newmodelos = [ ...modelos ];
		newmodelos[id] = event.target.value;
		setModelos(newmodelos);
	};
	const [ enfriadores, setEnfriadores ] = useState([ 0 ]);
	const handleAdd = () => {
		let newenfriadores = [ ...enfriadores ];
		let init = [ 0 ];
		if (newenfriadores.length == 0) {
			newenfriadores = [ ...init ];
		} else {
			newenfriadores.push(newenfriadores[newenfriadores.length - 1] + 1);
		}
		setEnfriadores(newenfriadores);
	};
	const handleDelete = (id) => {
		let temp = [ ...enfriadores ];
		let newenfriadores = [];
		newenfriadores = temp.filter((e) => {
			return e != id;
		});
		setEnfriadores(newenfriadores);
	};

	useEffect(() => {}, [ enfriadores ]);

	return (
		<div className={classes.root}>
			<div className={classes.headerItemsBox}>
				<Typography className={classes.headingHeader}>Enfriadores</Typography>
				<IconButton className={classes.add} onClick={() => handleAdd()}>
					<AddCircleIcon />
				</IconButton>
			</div>
			<Divider />
			{enfriadores.length == 0 ? (
				<div>
					<Typography align="center" className={classes.headingProduct}>
						No existen enfriadores a crear
					</Typography>
				</div>
			) : (
				<div>
					{enfriadores.map((enfriador) => (
						<ExpansionPanel key={enfriadores.indexOf(enfriador)}>
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
											event.stopPropagation(), handleDelete(enfriador);
										}}
										onFocus={(event) => event.stopPropagation()}
									>
										<DeleteIcon fontSize="small" />
									</IconButton>
									<Typography align="center" className={classes.headingProduct}>
										Enfriador {'' + (enfriador + 1)}
									</Typography>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<div className={classes.form}>
									<div className={classes.row}>
										<TextField
											id="outlined-multiline-static"
											label="Id"
											variant="outlined"
											disabled
											value={props.id}
											className={classes.inputTextGrow1}
										/>
										<FormControl variant="outlined" className={classes.inputTextGrow3}>
											<InputLabel>Modelo</InputLabel>
											<Select
												value={modelos[enfriadores.indexOf(enfriador)]}
												onChange={(event) =>
													handleChangeModelo(event, enfriadores.indexOf(enfriador))}
												label="Codigo de producto"
											>
												{modelosOp.map((mod) => (
													<MenuItem key={modelosOp.indexOf(mod)} value={mod}>
														{mod}
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

Enfriadores.propTypes = {
	history: PropTypes.object
};

export default Enfriadores;

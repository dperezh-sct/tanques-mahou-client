import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Camera } from '../../../../../../components';
import { FormContext } from '../../../../../../contexts/FormContext';

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

const useStyles = makeStyles(theme => ({
    root: {
        margin: '10px 10px'

    },
    form: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-aroud',
    },
    overrides: {
        // Style sheet name ⚛️
        MuiTypography: {
            // Name of the rule
            color: 'white',
            h5: {
                // Some CSS
                color: 'white',
            },
        },
    },
    card: {
        width: '100%'
    },
    header: {
        backgroundColor: theme.palette.neutral.main,
        color: theme.palette.primary.contrastText,
    },
    headerItemsBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        justifyContent: 'center',
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

    },
    headingProduct: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        alignSelf: 'center',

    },
    headingHeader: {
        alignSelf: 'center',

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


const chapaOp = ['SI', 'NO'];

const TanquesList = props => {
    /**STYLES */
    const { className, ...rest } = props;
    const classes = useStyles();
    const [modelosOp, setModelosOp] = useState([]);
    const [acabadosOp, setAcabadosOp] = useState([]);

    //const { tanques, setTanques } = useContext(FormContext);

    const [modelos, setModelos] = useState([]);
    const handleChangeModelo = (event, id) => {
        let newmodelos = [...modelos]
        newmodelos[id] = event.target.value;
        setModelos(newmodelos);
    };
    const [acabados, setAcabados] = useState([]);
    const handleChangeAcabados = (event, id) => {
        let newacabados = [...acabados]
        newacabados[id] = event.target.value;
        setAcabados(newacabados);
    };
    const [chapas, setChapas] = useState([]);
    const handleChangeChapas = (event, id) => {
        let newchapas = [...chapas]
        newchapas[id] = event.target.value;
        setChapas(newchapas);
    };
    const [tanques, setTanques] = useState([0]);
    const handleAdd = () => {
        let newtanques = [...tanques]
        let init = [0];
        if (newtanques.length == 0) {
            newtanques = [...init];
        } else {
            newtanques.push((newtanques[newtanques.length - 1]) + 1)
        }
        setTanques(newtanques);
    }
    const handleDelete = (id) => {
        let temp = [...tanques]
        let newtanques = []
        newtanques = temp.filter(e => {
            return e != id
        })
        setTanques(newtanques);
    }

    useEffect(() => {
        setModelosOp(JSON.parse(localStorage.getItem('modeloTanque')));
        setAcabadosOp(JSON.parse(localStorage.getItem('acabadoTanque')));
    }, [tanques]);

    return (
        <div className={classes.root}>
            <div className={classes.headerItemsBox}>
                <Typography className={classes.headingHeader}>
                    Tanques
                                </Typography>
                <IconButton
                    className={classes.add}
                    onClick={() => handleAdd()}>
                    <AddCircleIcon />
                </IconButton>
            </div>
            <Divider />
            {tanques.length == 0 ? (
                <div>
                    <Typography
                        align='center'
                        className={classes.headingProduct}>
                        No existen tanques a crear
            </Typography>
                </div>
            ) : (
                    <div>
                        {tanques.map((tanque) => (
                            <ExpansionPanel key={tanques.indexOf(tanque)}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <div className={classes.rowCenter}>
                                        <IconButton
                                            aria-label="delete"
                                            className={classes.delete}
                                            onClick={(event) => { event.stopPropagation(), handleDelete(tanque) }}
                                            onFocus={(event) => event.stopPropagation()}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                        <Typography
                                            align='center'
                                            className={classes.headingProduct}>
                                            Tanque {"" + (tanque + 1)}
                                        </Typography>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.form}>
                                        <div className={classes.row}>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Número de chasis"
                                                variant="outlined"
                                                className={classes.inputTextGrow4}
                                            />
                                        </div>
                                        <div className={classes.row}>
                                            <FormControl
                                                variant="outlined"
                                                className={classes.inputTextGrow4}
                                            >
                                                <InputLabel>Modelo</InputLabel>
                                                <Select
                                                    value={modelos[tanques.indexOf(tanque)]}
                                                    onChange={(event) => handleChangeModelo(event, tanques.indexOf(tanque))}
                                                    label="Codigo de producto"
                                                >
                                                    {modelosOp.map((mod) => (
                                                        <MenuItem
                                                            key={modelosOp.indexOf(mod)}
                                                            value={mod}
                                                        >
                                                            {mod}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className={classes.row}>
                                            <FormControl
                                                variant="outlined"
                                                className={classes.inputTextGrow4}
                                            >
                                                <InputLabel>Acabado</InputLabel>
                                                <Select
                                                    value={acabados[tanques.indexOf(tanque)]}
                                                    onChange={(event) => handleChangeAcabados(event, tanques.indexOf(tanque))}
                                                    label="Codigo de producto"
                                                >
                                                    {acabadosOp.map((acab) => (
                                                        <MenuItem
                                                            key={acabadosOp.indexOf(acab)}
                                                            value={acab}
                                                        >
                                                            {acab}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className={classes.row}>
                                            <FormControl
                                                variant="outlined"
                                                className={classes.inputTextGrow4}
                                            >
                                                <InputLabel>Chapa</InputLabel>
                                                <Select
                                                    value={chapas[tanques.indexOf(tanque)]}
                                                    onChange={(event) => handleChangeChapas(event, tanques.indexOf(tanque))}
                                                    label="Codigo de producto"
                                                >
                                                    {chapaOp.map((chapa) => (
                                                        <MenuItem
                                                            key={chapaOp.indexOf(chapa)}
                                                            value={chapa}
                                                        >
                                                            {chapa}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className={classes.row}>
                                            <Camera name='Foto de tanque' />
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
                    </div>)}


        </div >
    );
};

TanquesList.propTypes = {
    history: PropTypes.object
};

export default TanquesList;

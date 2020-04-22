import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Camera } from '../../../../../../components';
import {
    FormControl,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    Typography,
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

const situacionOp = ['Visto (zona clientes)', 'No visto'];
const automaticoOp = ['SI', 'NO'];
const tipoOp = ['Naumático', 'Electrónico'];
const alarmaOp = ['SI', 'NO'];
const estructuraOp = ['SI', 'NO'];
const certificadoOp = ['SI', 'NO'];

const Otros = props => {
    /**STYLES */
    const { className, ...rest } = props;
    const classes = useStyles();

    const [situacion, setSituacion] = useState([]);
    const handleChangeSituacion = (event) => {
        setSituacion(event.target.value);
    };
    const [automatico, setAutomatico] = useState([]);
    const handleChangeAutomatico = (event) => {
        setAutomatico(event.target.value);
    };
    const [tipo, setTipo] = useState([]);
    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    };
    const [alarma, setAlarma] = useState([]);
    const handleChangeAlarma = (event) => {
        setAlarma(event.target.value);
    };
    const [estructura, setEstructura] = useState([]);
    const handleChangeEstructura = (event) => {
        setEstructura(event.target.value);
    };
    const [certificado, setCertificado] = useState([]);
    const handleChangeCertificado = (event) => {
        setCertificado(event.target.value);
    };

    useEffect(() => {
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.headerItemsBox}>
                <Typography className={classes.headingHeader}>
                    Otros
                                </Typography>

            </div>
            <div className={classes.form}>
                <div className={classes.row}>
                    <FormControl
                        variant="outlined"
                        className={classes.inputTextGrow4}
                    >
                        <InputLabel>Situación de los tanques</InputLabel>
                        <Select
                            value={situacion}
                            onChange={(event) => handleChangeSituacion(event)}
                            label="Situación de los tanques"
                        >
                            {situacionOp.map((item) => (
                                <MenuItem
                                    key={situacionOp.indexOf(item)}
                                    value={item}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.row}>
                    <Camera name='Foto de ubicación (Tanques)' />
                </div>
                <div className={classes.row}>
                    <FormControl
                        variant="outlined"
                        className={classes.inputTextGrow4}
                    >
                        <InputLabel>Sistema automático</InputLabel>
                        <Select
                            value={automatico}
                            onChange={(event) => handleChangeAutomatico(event)}
                            label="Sistema automático"
                        >
                            {automaticoOp.map((item) => (
                                <MenuItem
                                    key={automaticoOp.indexOf(item)}
                                    value={item}
                                >
                                    {item}
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
                        <InputLabel>Tipo</InputLabel>
                        <Select
                            value={tipo}
                            onChange={(event) => handleChangeTipo(event)}
                            label="Tipo"
                        >
                            {tipoOp.map((item) => (
                                <MenuItem
                                    key={tipoOp.indexOf(item)}
                                    value={item}
                                >
                                    {item}
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
                        <InputLabel>Alarma</InputLabel>
                        <Select
                            value={alarma}
                            onChange={(event) => handleChangeAlarma(event)}
                            label="Alarma"
                        >
                            {alarmaOp.map((item) => (
                                <MenuItem
                                    key={alarmaOp.indexOf(item)}
                                    value={item}
                                >
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
                    />
                </div>
                <div className={classes.row}>
                    <Camera name='Situacion de la alarma (Tª)' />
                </div>
                <div className={classes.row}>
                    <FormControl
                        variant="outlined"
                        className={classes.inputTextGrow4}
                    >
                        <InputLabel>Estructura</InputLabel>
                        <Select
                            value={estructura}
                            onChange={(event) => handleChangeEstructura(event)}
                            label="Estructura"
                        >
                            {estructuraOp.map((item) => (
                                <MenuItem
                                    key={estructuraOp.indexOf(item)}
                                    value={item}
                                >
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.row}>
                    <FormControl
                        variant="outlined"
                        className={classes.inputTextGrow4}
                        disabled
                    >
                        <InputLabel>Certificado</InputLabel>
                        <Select
                            value={certificado}
                            onChange={(event) => handleChangeEstructura(event)}
                            label="Estructura"

                        >
                            {certificadoOp.map((item) => (
                                <MenuItem
                                    key={certificadoOp.indexOf(item)}
                                    value={item}
                                >
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
                    />
                </div>
            </div>


        </div >
    );
};

Otros.propTypes = {
    history: PropTypes.object
};

export default Otros;

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

const acabadosOp = [
    'INOX',
    'COBRE',
    'COBRE ENVEJECIDO',
    'LATÓN',
    'BLANCO',
    'GRAFITO',
    'DORADA',
    'BLANCO',
    'ROJO']
const codigosOp = ['99 AGUA / GRANEL SIN MARCA',
    'B6 ALHAMBRA ESP.',
    'D8 ALHAMBRA PREMIUM LAGER',
    'N7 ALHAMBRA RADLER',
    'E5 ALHAMBRA ROJA',
    'B4 ALHAMBRA SIN',
    'H0 ALL DAY IPA',
    'A4 BLACKTHORN',
    '17 BLANCHE DE BRUGES',
    'R1 BUDWEISER',
    'C2 CARLING',
    '34 CARLSBERG',
    'H4 DIRTY BASTARD',
    "05 FOSTER'S",
    'H5 FOUNDERS',
    'R6 FRANZISKANER NATURTRÜB',
    'N4 GRIMBERGEN BELGIAN PALE ALE',
    '15 GRIMBERGEN DOUBLE',
    'C1 GUINESS',
    'H9 HANAMI',
    'R7 HOEGAARDEN',
    'G6 HONG KONG TAP STATION',
    'C7 KONIG LUDWIG',
    '03 KRONENBOURG',
    'N8 LA MEZQUITA',
    'N2 LA SALVE BOTXO',
    'S1 LA SALVE LAGER AUTENTICA',
    'S2 LA SALVE MUNICH',
    'S4 LA SALVE NEGRA',
    'S3 LA SALVE ORIGINAL',
    'S5 LA SALVE SEASONAL',
    'S7 LA SALVE SIRIMIRI GERMAN ALE',
    'S9 LA SALVE SIRIMIRI PIKA',
    'S8 LA SALVE TXIRENE',
    'R3 LEFFE BLONDE',
    'R4 LEFFE BRUNE',
    'R5 LEFFE ROSSE',
    'N5 MAGNA',
    'N9 MAHOU 0, 0 TOSTADA',
    '30 MAHOU 5 ESTRELLAS',
    '31 MAHOU CLASICA',
    'N1 MAHOU DUNKEL',
    'N6 MAHOU IPA 5E',
    '27 MAHOU MAESTRA',
    '33 MAHOU NEGRA',
    '26 MAHOU RADLER',
    '32 MAHOU SIN',
    '20 NEWCASTLE BROWN',
    'I0 NOMADA',
    'H8 PASSIFLORA',
    'H7 PETRICOR',
    'H3 PORTER',
    '40 REINA',
    '01 SAN MIGUEL',
    '19 SAN MIGUEL 0,0',
    '41 SAN MIGUEL RADLER',
    '02 SAN MIGUEL SELECTA',
    'A8 SARANGO LIMON',
    'B3 SARANGO SANGRIA',
    'B1 SIDRA GAYMER ORIGINAL',
    'B2 SIDRA GAYMER PEAR',
    '22 SM 1516',
    'F9 SM AMSTERDAM TAP STATION',
    'G1 SM BARCELONA TAP STATION',
    'F2 SM BERLIN TAP STATION',
    'G3 SM BILBAO TAP STATION',
    'G4 SM BURGOS TAP STATION',
    'F8 SM CHICAGO TAP STATION',
    'F3 SM HALLERTAU TAP STATION',
    'F7 SM HAMBURGO TAP STATION',
    'F0 SM LEON TAP STATION',
    'G5 SM LLEIDA TAP STATION',
    'F6 SM LONDRES TAP STATION',
    'G2 SM MALAGA TAP STATION',
    'F5 SM PRAGA TAP STATION',
    'F1 SM TAP STATION',
    'G7 SM TOKIO TAP STATION',
    'R2 STELLA ARTOIS',
    'E6 TANQUE ALHAMBRA',
    '29 TANQUE MAHOU',
    '25 TANQUE MAHOU 5 ESTRELLAS',
    '13 TANQUE SAN MIGUEL',
    "A7 TETLEY'S",
    'V2 VERMUT MSM',
    '94 WARSTEINER']

const Productos = props => {
    /**STYLES */
    const { className, ...rest } = props;
    const classes = useStyles();


    const [codigos, setCodigos] = useState([]);
    const handleChangeCodigo = (event, id) => {
        let newcodigos = [...codigos]
        newcodigos[id] = event.target.value;
        setCodigos(newcodigos);
    };
    const [acabados, setAcabados] = useState([]);
    const handleChangeAcabado = (event, id) => {
        let newacabados = [...codigos]
        newacabados[id] = event.target.value;
        setAcabados(newacabados);
    };
    const [products, setProducts] = useState([0]);
    const handleAdd = () => {
        let newproducts = [...products]
        let init = [0];
        if (newproducts.length == 0) {
            newproducts = [...init];
        } else {
            newproducts.push((newproducts[newproducts.length - 1]) + 1)
        }
        setProducts(newproducts);
    }
    const handleDelete = (id) => {
        let temp = [...products]
        let newproducts = []
        newproducts = temp.filter(e => {
            return e != id
        })
        setProducts(newproducts);
    }

    useEffect(() => {
    }, [products]);


    return (
        <div className={classes.root}>
            <div className={classes.headerItemsBox}>
                <Typography className={classes.headingHeader}>
                    Productos
                                </Typography>
                <IconButton
                    className={classes.add}
                    onClick={() => handleAdd()}>
                    <AddCircleIcon />
                </IconButton>
            </div>
            <Divider />
            {products.length == 0 ? (
                <div>
                    <Typography
                        align='center'
                        className={classes.headingProduct}>
                        No existen productos a crear
            </Typography>
                </div>
            ) : (
                    <div>
                        {products.map((product) => (
                            <ExpansionPanel key={products.indexOf(product)}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <div className={classes.rowCenter}>
                                        <IconButton
                                            aria-label="delete"
                                            className={classes.delete}
                                            onClick={(event) => { event.stopPropagation(), handleDelete(product) }}
                                            onFocus={(event) => event.stopPropagation()}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                        <Typography
                                            align='center'
                                            className={classes.headingProduct}>
                                            Producto {"" + (product + 1)}
                                        </Typography>
                                    </div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div className={classes.form}>
                                        <div className={classes.row}>
                                            <FormControl
                                                variant="outlined"
                                                className={classes.inputTextGrow4}
                                            >
                                                <InputLabel>Código de producto</InputLabel>
                                                <Select
                                                    value={codigos[products.indexOf(product)]}
                                                    onChange={(event) => handleChangeCodigo(event, products.indexOf(product))}
                                                    label="Codigo de producto"
                                                >
                                                    {codigosOp.map((cod) => (
                                                        <MenuItem
                                                            key={codigosOp.indexOf(cod)}
                                                            value={cod}
                                                        >
                                                            {cod}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className={classes.row}>
                                            <TextField
                                                id="outlined-secondary"
                                                label="Modelo de la columna"
                                                variant="outlined"

                                                className={classes.inputTextGrow4}
                                            />
                                        </div>
                                        <div className={classes.row}>
                                            <FormControl
                                                variant="outlined"
                                                className={classes.inputTextGrow4}
                                            >
                                                <InputLabel>Acabado</InputLabel>
                                                <Select
                                                    value={acabados[products.indexOf(product)]}
                                                    onChange={(event) => handleChangeAcabado(event, products.indexOf(product))}
                                                    label="Acabado"
                                                >
                                                    {acabadosOp.map((acabado) => (
                                                        <MenuItem
                                                            key={acabadosOp.indexOf(acabado)}
                                                            value={acabado}
                                                        >
                                                            {acabado}
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
                )
            }


        </div >
    );
};

Productos.propTypes = {
    history: PropTypes.object
};

export default Productos;

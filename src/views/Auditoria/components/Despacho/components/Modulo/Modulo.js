import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Camera } from '../../../../../../components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Productos, Enfriadores } from './components';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    IconButton,
    Card,
    CardHeader,
    CardContent,
    Divider
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
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
    headingModul: {
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
    },
    subHeader: {
        marginBottom: '10px'
    }

}));

const Modulo = props => {
    /**STYLES */
    const { className, ...rest } = props;
    const classes = useStyles();

    const [moduls, setModuls] = useState([0]);
    const handleAdd = () => {
        let newmoduls = [...moduls]
        let init = [0];
        if (newmoduls.length == 0) {
            newmoduls = [...init];
        } else {
            newmoduls.push((newmoduls[newmoduls.length - 1]) + 1)
        }
        setModuls(newmoduls);
    }
    const handleDelete = (id) => {
        let temp = [...moduls]
        let newmoduls = []
        newmoduls = temp.filter(e => {
            return e != id
        })
        setModuls(newmoduls);
    }

    useEffect(() => {
    }, [moduls]);

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.header}
                    title={
                        <div className={classes.headerItemsBox}>
                            <Typography
                                align='center'
                                variant='h5'
                                className={classes.headingHeader}>
                                Modulos
                        </Typography>
                            <IconButton
                                aria-label="delete"
                                className={classes.add}
                                onClick={() => handleAdd()}>
                                <AddCircleIcon />
                            </IconButton>
                        </div>

                    } />
            </Card>
            {moduls.map((mod) => (
                <ExpansionPanel key={moduls.indexOf(mod)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className={classes.rowCenter}>
                            <IconButton
                                aria-label="delete"
                                className={classes.delete}
                                onClick={(event) => { event.stopPropagation(), handleDelete(mod) }}
                                onFocus={(event) => event.stopPropagation()}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                            <Typography
                                align='center'
                                className={classes.headingModul}>
                                Modulo {"" + (mod + 1)}
                            </Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className={classes.root}>

                            <Productos />
                            <Enfriadores id={mod} />
                            <div className={classes.row}>
                                <Camera name='Foto de enfriadores (Desde adentro)' />
                            </div>
                            <div className={classes.row}>
                                <Camera name='Foto de FRONTAL EXTERIOR' />
                            </div>
                            <div className={classes.row}>
                                <Camera name='Foto de LATERAL IZQUIERDO EXTERIOR' />
                            </div>
                            <div className={classes.row}>
                                <Camera name='Foto de LATERAL DERECHO EXTERIOR' />
                            </div>
                            <div className={classes.row}>
                                <Camera name='Foto de botella CO2' />
                            </div>

                        </div >
                    </ExpansionPanelDetails>
                </ExpansionPanel>


            ))}

        </div>
    );
};

Modulo.propTypes = {
    history: PropTypes.object
};

export default Modulo;

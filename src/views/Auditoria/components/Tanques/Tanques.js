import React, { useState, useEffect, useContext, forwardRef } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../../../components/Section';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
    TextField,
    FormControl,
    IconButton,
    Select,
    MenuItem,
    InputLabel
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignContent: 'center'
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
        margin: '10px 10px',
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
        maxWidth: '50%'
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
        width: '100%',
    },

}));
const Tanques = props => {
    /**STYLES */
    const { className, ...rest } = props
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <Section title='Tanques'>
                <FormControl variant="outlined" className={classes.formControl}>

                    <div className={classes.row}>
                        <TextField
                            id="outlined-multiline-static"
                            label=" dinamic input test"
                            multiline
                            rows="3"
                            variant="outlined"
                            className={classes.inputTextGrow4}
                        />
                    </div>
                </FormControl>
            </Section>
        </div>
    );
};

Tanques.propTypes = {
    history: PropTypes.object
};

export default Tanques;

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../../../../../components/Section'
import {
    Paper
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    }

}));


const Enfriador = props => {
    /**STYLES */
    const { className, ...rest } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>

        </div>
    );
};

Enfriador.propTypes = {
    history: PropTypes.object
};

export default Enfriador;

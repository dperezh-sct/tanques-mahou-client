import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../../../components/Section';
import { Modulo } from './components';
import {
    Paper
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-aroud'
    }

}));


const Despacho = props => {
    /**STYLES */
    const { className, ...rest } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Modulo />

        </div>
    );
};

Despacho.propTypes = {
    history: PropTypes.object
};

export default Despacho;

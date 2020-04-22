import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../../../../components/Section';
import {
    Compresores,
    EnfriadoresTanques,
    Otros,
    TanquesList
} from './components';
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


const Tanques = props => {
    /**STYLES */
    const { className, ...rest } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Section title="Tanques">
                <TanquesList />
                <EnfriadoresTanques />
                <Otros />
                <Compresores />
            </Section>
        </div>
    );
};

Tanques.propTypes = {
    history: PropTypes.object
};

export default Tanques;

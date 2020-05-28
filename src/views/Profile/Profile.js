import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import {
    Paper,
    Grid
} from '@material-ui/core';
import { AccountProfile, AccountDetails } from './components';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 20px'
    },

}));


const Profile = props => {
    /**STYLES */
    const { className, ...rest } = props
    const classes = useStyles()
    const { isAuth } = useContext(AuthContext);

    return (
        <div className={classes.root}>
            {isAuth && localStorage.getItem('key') ? (
                <Grid
                    container
                    spacing={4}
                >
                    <Grid
                        item
                        lg={8}
                        md={6}
                        xl={8}
                        xs={12}
                    >
                        <AccountDetails />
                    </Grid>
                </Grid>
            ) : (<Redirect to="/login" />)}
        </div>
    );
};

Profile.propTypes = {
    history: PropTypes.object
};

export default Profile;

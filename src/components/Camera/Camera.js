
import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Section from '../Section';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {
    Grid,
    TextField,
    FormControl,
    IconButton,
    Typography,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid grey',
        borderRadius: '5px',
        padding: '10px 10px',
        margin: '5px 5px',
        width: '97%',
        flexWrap: 'wrap',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: '4',
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '70%',
        color: 'transparent'
    },
    preview: {
        width: '50px',
        height: '50px'
    }

}));



const Camera = props => {
    /**STYLES */
    const { className, ...rest } = props
    const classes = useStyles()
    const [file, setFile] = useState('/images/empty-image-thumb.png');

    function handleChange(event) {
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <div className={classes.root}>
            <Typography
                variant='h6'
                className={classes.title}
            >
                {props.name}
            </Typography>

            <div className={classes.content}>
                <input
                    id="photo1"
                    accept="image/*"
                    type="file"
                    onChange={(event) => handleChange(event)}
                    label='foto'
                    className={classes.input}
                />
                <img className={classes.preview} src={file} />
            </div>

        </div>
    );
};

Camera.propTypes = {
    history: PropTypes.object
};

export default Camera;

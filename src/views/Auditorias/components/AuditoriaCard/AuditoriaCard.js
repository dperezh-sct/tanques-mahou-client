import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        alignSelf: 'stretch',
        margin: '10px 0px'
    },
    details: {
        display: 'flex'
    },
    avatar: {
        marginLeft: 'auto',
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0
    },
    progress: {
        marginTop: theme.spacing(2)
    },
    uploadButton: {
        marginRight: theme.spacing(2)
    }
}));

const AuditoriaCard = props => {
    const { className, ...rest } = props;
    const classes = useStyles();

    return (
        <Card
            className={classes.root}
        >
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography
                            gutterBottom
                        >
                            {props.name}
                        </Typography>
                        <Typography
                            className={classes.locationText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {props.city}, {props.country}
                        </Typography>
                        <Typography
                            className={classes.dateText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {moment().format('hh:mm A')} ({props.timezone})
            </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

AuditoriaCard.propTypes = {
    className: PropTypes.string
};

export default AuditoriaCard;

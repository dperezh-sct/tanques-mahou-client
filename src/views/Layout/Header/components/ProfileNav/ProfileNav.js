import React, { useContext, useEffect, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import { UserContext } from '../../../../../contexts/UserContext';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, Avatar, Typography } from '@material-ui/core';

const CustomRouterLink = forwardRef((props, ref) => (
	<div ref={ref} style={{ flexGrow: 1 }}>
		<RouterLink {...props} />
	</div>
));

const ProfileNav = (props) => {
	const classes = useStyles();
	const { email, firstName, lastName } = useContext(UserContext);

	useEffect(() => { }, [email, firstName, lastName]);

	return (
		<div className={classes.root}>
			<Grid className={classes.grid} container>
				<Grid className={classes.content} item lg={12} xs={12}>
					<div className={classes.logoBox}>
						<img className={classes.media} src="/images/mahou-nc-lg@2x.png" />
					</div>
					<Button to="/profile" component={CustomRouterLink} className={classes.avatar}>
						<Avatar alt="Remy Sharp" className={classes.large} src="/images/avatar_7.png" />
					</Button>
					<Typography className={classes.title}>Técnico {localStorage.getItem('username')}</Typography>
					<Typography className={classes.name}>{firstName + '' + lastName}</Typography>
					<Typography className={classes.email}>{email}</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

ProfileNav.propTypes = {
	history: PropTypes.object
};
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	grid: {
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoBox: {
		margin: '0px 10px'
	},
	media: {
		width: '50%'
	},
	avatar: {
		radioButton: '50px',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	},
	title: {
		fontSize: '14px'
	},
	email: {
		marginBottom: '10px'
	},
	name: {
		fontSize: '20px',
		fontWeight: 'bold'
	}
}));

export default ProfileNav;


import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { ProfileNav } from './components';

import {
    Button,
    List,
    Divider,
    ListItem,
    Avatar
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        minHeight: '50px',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
        color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1)
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main
        }
    },
    colapseIcon: {
        color: theme.palette.white,
    },
    centerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    NavButton: {
        minHeight: '100%'
    }
}));


const pages = [
    {
        title: 'Inicio',
        href: '/home',
        icon: <HomeIcon />
    },
    {
        title: 'Perfil',
        href: '/profile',
        icon: <PersonIcon />
    },
    {
        title: 'Auditorias',
        href: '/auditorias',
        icon: <ListAltIcon />
    },
    {
        title: 'Nueva auditoria',
        href: '/nueva-auditoria',
        icon: <AddCircleOutlineIcon />
    },
    {
        title: 'Cerrar sesion',
        href: '/log-out',
        icon: <ExitToAppIcon />
    }
];
const CustomRouterLink = forwardRef((props, ref) => (
    <div
        ref={ref}
        style={{ flexGrow: 1 }}
    >
        <RouterLink {...props} />
    </div>
));

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };


    return (
        <div className={classes.root}>
            <Button
                className={classes.NavButton}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon className={classes.colapseIcon} />
            </Button>
            <SwipeableDrawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div
                    className={clsx(classes.list)}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <ProfileNav />
                    <List>
                        {pages.map(page => (
                            <ListItem
                                className={classes.item}
                                disableGutters
                                key={page.title}
                            >
                                <Button
                                    activeClassName={classes.active}
                                    className={classes.button}
                                    component={CustomRouterLink}
                                    to={page.href}
                                >
                                    <div className={classes.icon}>{page.icon}</div>
                                    {page.title}
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
}
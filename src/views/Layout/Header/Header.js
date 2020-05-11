
import React, { forwardRef, useEffect, useState, useContext } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SyncIcon from '@material-ui/icons/Sync';
import { ProfileNav } from './components';
import { AuthContext } from '../../../contexts/AuthContext';
import { refresh } from '../../../helpers/Data/getData';

import {
    Button,
    List,
    ListItem
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
    },
    navBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
}));


const pages = [
    {
        title: 'Inicio',
        href: '/',
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
    const [state, setState] = useState(false);
    const { isAuth } = useContext(AuthContext);
    const toggleDrawer = (open) => event => {
        if (isAuth && localStorage.getItem('key')) {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            setState(open);
        }

    };
    const handleRefresh = () => {
        refresh();
    };
    useEffect(() => {
    }, [isAuth]);

    return (
        <div className={classes.root}>
            {isAuth && localStorage.getItem('key') ? (
                <div className={classes.navBox}>
                    <Button
                        className={classes.NavButton}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon className={classes.colapseIcon} />
                    </Button>
                    <Button
                        className={classes.NavButton}
                        onClick={() => handleRefresh()}
                    >
                        <SyncIcon className={classes.colapseIcon} />
                    </Button>
                </div>
            ) : (
                    <div className={classes.navBox}>
                        <Button
                            className={classes.NavButton}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon className={classes.colapseIcon} />
                        </Button>
                    </div>
                )}

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
                        {localStorage.getItem('key') != null ? (
                            <ListItem
                                className={classes.item}
                                disableGutters
                                key='Cerrar sesion'
                            >
                                <Button
                                    activeClassName={classes.active}
                                    className={classes.button}
                                    component={CustomRouterLink}
                                    to='/logout'
                                >
                                    <div className={classes.icon}><ExitToAppIcon /></div>
                                    Cerrar sesion
                                </Button>
                            </ListItem>
                        ) : (
                                <ListItem
                                    className={classes.item}
                                    disableGutters
                                    key='Iniciar sesión'
                                >
                                    <Button
                                        className={classes.button}
                                        component={CustomRouterLink}
                                        to='/login'
                                    >
                                        <div className={classes.icon}><ExitToAppIcon /></div>
                                Iniciar sesión
                            </Button>
                                </ListItem>
                            )}

                    </List>


                </div>
            </SwipeableDrawer>
        </div>
    );
}
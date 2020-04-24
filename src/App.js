import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import HeaderView from './views/Layout/Header';
import AuditoriaView from './views/Auditoria';
import AuditoriasView from './views/Auditorias';
import LogoutView from './views/Logout';
import LoginView from './views/Login';
import HomeView from './views/Home';
import ProfileView from './views/Profile';


const browserHistory = createBrowserHistory({ basename: '' });


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <HeaderView />
          <Route path="/login" component={LoginView} />
          <Route path="/nueva-auditoria" component={AuditoriaView} />
          <Route path="/auditorias" component={AuditoriasView} />
          <Route path="/logout" component={LogoutView} />
          <Route path="/profile" component={ProfileView} />
          <Route exact path="/" component={HomeView} />
        </Router>
      </ThemeProvider>
    );
  }
}

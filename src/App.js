import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import Header from './views/Layout/Header';
import Auditoria from './views/Auditoria';
import Auditorias from './views/Auditorias';
import Logout from './views/Logout';
import Login from './views/Login';
import Home from './views/Home';


const browserHistory = createBrowserHistory({ basename: '' });


export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>

        <Router history={browserHistory}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/nueva-auditoria" component={Auditoria} />
          <Route path="/auditorias" component={Auditorias} />
          <Route path="/log-out" component={Logout} />
          <Route path="/log-in" component={Login} />
        </Router>
      </ThemeProvider>
    );
  }
}

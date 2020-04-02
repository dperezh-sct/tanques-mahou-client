import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  secondary: {
    contrastText: white,
    dark: colors.yellow[820],
    main: colors.yellow[700],
    light: colors.yellow[200]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.yellow[700],
    light: colors.orange[400]
  },
  medium: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[800],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  neutral: {
    contrastText: white,
    dark: colors.grey[500],
    main: colors.grey[300],
    light: colors.grey[400]
  },
  offBack: {
    contrastText: colors.blueGrey[900],
    back: '#F4F6F8'
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};

import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#01959F',
      light: '#F7FEFF',
    },
    secondary: {
      main: '#FEEABC',
      light: '#FFFCF5',
    },
    danger: {
      main: '#F5B1B7',
      light: '#FFFAFA',
    },
    success: {
      main: '#B8DBCA',
      light: '#F8FBF9',
    },
  },
});

export default theme;

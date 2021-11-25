import {createTheme } from '@material-ui/core';
import YomogiRegular from '../../Fonts/Yomogi-Regular.ttf';

const yomogi = {
  fontFamily: 'Yomogi',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Yomogi'),
    local('Yomogi-Regular'),
    url(${YomogiRegular}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const theme = createTheme({
  typography: {
    fontFamily: "'Yomogi', bold",
    fontSize: 16,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [yomogi],
      },
    },
  },
});

export default theme;
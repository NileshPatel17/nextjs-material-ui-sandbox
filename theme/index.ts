// // Customize Material-UI with your theme
// // See more here: https://material-ui.com/customization/themes/

// export default theme;
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#243354',
      light: '#8C94AC',
      dark: '#162036',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#E13D4E',
      contrastText: '#d1713d',
    },
    text: {
      primary: '#243354',
      secondary: '#000',
    },
    background: {
      default: '#edf0f2',
      paper: '#fff',
    },
    divider: '#A4A6B3',
  },
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#243354',
      light: '#8C94AC',
      dark: '#162036',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#E13D4E',
      contrastText: '#d1713d',
    },
    text: {
      primary: '#FFF',
      secondary: '#edf0f2',
    },
    background: {
      default: '#162036',
      paper: '#243354',
    },
    divider: '#A4A6B3',
  },
});
// let theme = createMuiTheme({
//   drawerWidth: 240,
//   palette: {
//     primary: {
//       main: '#2d2d2d',
//       text: '#fff',
//     },
//     secondary: {
//       light: green[300],
//       main: green[500],
//       dark: green[700],
//     },
//     typography: {
//       useNextVariants: true,
//       h4: {
//         fontSize: 18,
//       },
//     },
//   },
// } as any);

// theme = responsiveFontSizes(theme);

// export type Theme = typeof theme;
export { darkTheme, lightTheme };

export const drawerWidth = 240;

export const rightDrawerWidth = 300;

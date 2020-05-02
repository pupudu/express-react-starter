import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5f5480',
    },
  },
});

export default function MaterialThemeProvider(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

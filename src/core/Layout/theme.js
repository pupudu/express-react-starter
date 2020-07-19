import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

export default function MaterialThemeProvider(props) {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: props.darkMode ? 'dark' : 'light',
          primary: {
            main: '#115293',
          },
          secondary: {
            main: '#DC004E',
          },
        },
      }),
    [props.darkMode],
  );
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

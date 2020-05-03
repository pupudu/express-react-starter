import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

export default function MaterialThemeProvider(props) {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: props.darkMode ? 'dark' : 'light',
          primary: {
            main: '#5f4f90',
          },
          secondary: {
            main: '#52a17d',
          },
        },
      }),
    [props.darkMode],
  );
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

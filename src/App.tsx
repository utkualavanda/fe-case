import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';


import { client } from './queryClient';
import { router } from './routes/routes';
import { breakpoints } from './theme/breakpoints';

function App() {
  client.setDefaultOptions({
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
    },
  });

  const theme = createTheme(
    {
      breakpoints,
      spacing: 4,
    },
    {
      locale: 'en',
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: '#f8f8f8',
            boxSizing: 'border-box',
            margin: 0,
          },
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

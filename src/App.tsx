import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { GlobalStyles } from '@mui/material';

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            boxSizing: 'border-box',
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

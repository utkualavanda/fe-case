import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { client } from './queryClient.ts';
import Box from '@mui/material/Box';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Suspense fallback={<Box>Loading</Box>}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Suspense>
    </QueryClientProvider>
  </StrictMode>
);

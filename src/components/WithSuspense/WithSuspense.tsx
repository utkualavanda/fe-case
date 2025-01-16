import Box from '@mui/material/Box';
import { ComponentType, Suspense } from 'react';

export const WithSuspense =
  <T extends object>({ Component }: { Component: ComponentType<T> }) =>
  (props: T) => (
    <Suspense fallback={<Box>Loading</Box>}>
      <Component {...props} />
    </Suspense>
  );

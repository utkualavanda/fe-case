import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export const Spinner = () => (
  <Stack sx={{ alignItems: 'center', marginY: '36px' }}>
    <CircularProgress sx={{ color: '#000000' }} />
  </Stack>
);

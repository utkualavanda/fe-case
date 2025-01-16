import { Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const RootPage = () => (
  <>
    <Stack
      sx={{
        flexDirection: 'row',
        backgroundColor: 'grey',
        padding: '12px',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <img src="/app-icon.png" width="32px" />
      <Typography fontWeight={600} color="white">
        FE Case
      </Typography>
    </Stack>
    <Outlet />
  </>
);

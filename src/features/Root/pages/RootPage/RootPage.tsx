import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../../routes/routeNames';

export const RootPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { spacing } = useTheme();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/${ROUTES.contents}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Helmet title="Contents" />
      <Stack
        sx={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          padding: '12px',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <img
          src="/app-icon.png"
          alt="app icon"
          style={{
            width: '32px',
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate('/');
          }}
        />
        <Typography fontWeight={600} color="white">
          IMDB
        </Typography>
      </Stack>
      <Box
        sx={{
          margin: { desktop: spacing(10, 20), mobile: spacing(5) },
          backgroundColor: 'white',
          padding: '16px',
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

import { useMediaQuery, useTheme } from '@mui/material';

export const useBreakpoints = () => {
  const { breakpoints } = useTheme();

  const isDesktop = useMediaQuery(breakpoints.up('desktop'));

  return {
    isDesktop,
  };
};

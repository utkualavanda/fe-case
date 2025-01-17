
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { Spinner } from '../../../../components/Spinner/Spinner';
import { useBreakpoints } from '../../../../hooks/utils/useBreakpoints';
import { useGetContent } from '../../hooks/useGetContent';

interface Info {
  title: string;
  value: string;
}

export const ContentDetailsPage = () => {
  const { id = '' } = useParams();

  const { isDesktop } = useBreakpoints();

  const { content } = useGetContent({ id, enabled: !!id });

  const memoizedInfo = useMemo<Info[]>(
    () =>
      content.data
        ? [
            { value: content.data.Title, title: 'Title' },
            { value: content.data.Runtime, title: 'Duration' },
            { value: content.data.Genre, title: 'Genre' },
            { value: content.data.Director, title: 'Director' },
            { value: content.data.Actors, title: 'Cast' },
            { value: content.data.imdbRating, title: 'IMDB Rating' },
          ]
        : [],
    [content.data]
  );

  return (
    <>
      <Helmet title={content.data?.Title || 'Content Details'} />
      {content.isLoading ? (
        <Spinner />
      ) : (
        <>
          {!!content.data ? (
            <Stack sx={{ gap: 4 }}>
              <Typography variant={isDesktop ? 'h4' : 'h6'} fontWeight={700}>
                {content.data.Title}
              </Typography>
              <Stack
                sx={{
                  flexDirection: { desktop: 'row', mobile: 'column' },
                  gap: 4,
                }}
              >
                {content.data.Poster !== 'N/A' && (
                  <Box>
                    <img
                      src={content.data.Poster}
                      alt="poster"
                      width={isDesktop ? '200px' : '100px'}
                    />
                  </Box>
                )}
                <Grid2
                  container
                  spacing={isDesktop ? '24px' : '12px'}
                  flexGrow={1}
                >
                  {memoizedInfo.map((info) => (
                    <Grid2 size={isDesktop ? 4 : 12} key={info.title}>
                      <Stack sx={{ gap: { desktop: 1, mobile: 0 } }}>
                        <Typography fontWeight={600}>{info.title}</Typography>
                        <Typography>{info.value}</Typography>
                      </Stack>
                    </Grid2>
                  ))}
                </Grid2>
              </Stack>
            </Stack>
          ) : (
            <Typography>No data found</Typography>
          )}
        </>
      )}
    </>
  );
};

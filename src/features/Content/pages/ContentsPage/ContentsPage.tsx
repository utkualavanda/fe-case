
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Spinner } from '../../../../components/Spinner/Spinner';
import { ContentsFilter } from '../../components/ContentsFilter/ContentsFilter';
import { ContentsTable } from '../../components/ContentsTable/ContentsTable';
import { useGetContents } from '../../hooks/useGetContents';
import { defaultFilterValue, FilterValue } from './constants';

export const ContentsPage = () => {
  const [filterValue, setFilterValue] = useState<FilterValue>({
    ...defaultFilterValue,
  });

  const { contents } = useGetContents({ ...filterValue });

  const onSubmit = (data: Omit<FilterValue, 'page'>) => {
    setFilterValue({ ...data, page: defaultFilterValue.page });
  };

  return (
    <>
      <Helmet title="Contents" />
      <Stack sx={{ gap: 4 }}>
        <ContentsFilter onSubmit={onSubmit} />
        {contents.isLoading ? (
          <Spinner />
        ) : (
          <>
            {!!contents.data?.Search?.length ? (
              <ContentsTable
                contentsData={contents.data}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            ) : (
              <Typography>{contents.data?.Error || 'No data found'}</Typography>
            )}
          </>
        )}
      </Stack>
    </>
  );
};

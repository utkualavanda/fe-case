import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid2 from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import { useBreakpoints } from '../../../../hooks/utils/useBreakpoints';
import {
  defaultFilterValue,
  FilterValue,
} from '../../pages/ContentsPage/constants';

export const ContentsFilter = ({
  onSubmit,
}: {
  onSubmit: (data: Omit<FilterValue, 'page'>) => void;
}) => {
  const { isDesktop } = useBreakpoints();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      year: defaultFilterValue.year,
      search: defaultFilterValue.search,
      type: defaultFilterValue.type,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2
        container
        columnSpacing={isDesktop ? '16px' : 0}
        rowSpacing={isDesktop ? 0 : '16px'}
        alignItems="center"
      >
        <Grid2 size={isDesktop ? 2 : 12}>
          <TextField fullWidth label="Search" {...register('search')} />
        </Grid2>
        <Grid2 size={isDesktop ? 2 : 12}>
          <TextField fullWidth label="Year" {...register('year')} />
        </Grid2>
        <Grid2 size={isDesktop ? 2 : 12}>
          <FormControl fullWidth>
            <InputLabel id="type-select">Type</InputLabel>
            <Select labelId="type-select" label="Type" {...register('type')}>
              <MenuItem value="movie">Movie</MenuItem>
              <MenuItem value="series">Series</MenuItem>
              <MenuItem value="episode">Episode</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
        <Grid2>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            type="submit"
            fullWidth={!isDesktop}
          >
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </form>
  );
};

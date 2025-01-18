import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid2 from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Controller, useForm } from 'react-hook-form';

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

  const { handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {
      year: defaultFilterValue.year,
      search: defaultFilterValue.search,
      type: defaultFilterValue.type,
    },
  });

  const typeWatchValue = watch('type');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2
        container
        columnSpacing={isDesktop ? '16px' : 0}
        rowSpacing={isDesktop ? 0 : '16px'}
        alignItems="center"
      >
        <Grid2 size={isDesktop ? 2 : 12}>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Search" />
            )}
          />
        </Grid2>
        <Grid2 size={isDesktop ? 2 : 12}>
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <TextField {...field} fullWidth label="Year" />
            )}
          />
        </Grid2>
        <Grid2 size={isDesktop ? 2 : 12}>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="type-select">Type</InputLabel>
                <Select
                  {...field}
                  labelId="type-select"
                  label="Type"
                  endAdornment={
                    !!typeWatchValue && (
                      <IconButton
                        sx={{ padding: 0, marginRight: '12px' }}
                        onClick={() =>
                          setValue('type', defaultFilterValue.type)
                        }
                      >
                        <ClearIcon />
                      </IconButton>
                    )
                  }
                >
                  <MenuItem value="movie">Movie</MenuItem>
                  <MenuItem value="series">Series</MenuItem>
                  <MenuItem value="episode">Episode</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid2>
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
    </form>
  );
};

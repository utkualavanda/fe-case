import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import { Dispatch, SetStateAction } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { GetContentsSuccessResponse } from '../../hooks/useGetContents';

export const ContentsTable = ({
  contentsData,
  filterValue,
  setFilterValue,
}: {
  contentsData: GetContentsSuccessResponse;
  filterValue: {
    year: string;
    search: string;
    type: string;
    page: number;
  };
  setFilterValue: Dispatch<
    SetStateAction<{
      year: string;
      search: string;
      type: string;
      page: number;
    }>
  >;
}) => {
  return (
    <>
      <TableContainer>
        <Table
          sx={{
            '& .MuiTableHead-root': {
              backgroundColor: '#f8f8f8',
              th: {
                '&:first-of-type': {
                  textAlign: 'start',
                },
                padding: '12px',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                fontWeight: 600,
              },
            },
            '& .MuiTableBody-root': {
              td: {
                '&:first-of-type': {
                  textAlign: 'start',
                },
                '&:last-child': {
                  textAlign: 'end',
                },
                padding: '8px',
                whiteSpace: 'nowrap',
                textAlign: 'center',
              },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>IMDb ID</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {contentsData.Search.map((content) => (
              <TableRow key={content.imdbID}>
                <TableCell>{content.Title}</TableCell>
                <TableCell>{content.Type}</TableCell>
                <TableCell>{content.Year}</TableCell>
                <TableCell>{content.imdbID}</TableCell>
                <TableCell>
                  <Tooltip title="View Detail" arrow>
                    <Link
                      component={ReactRouterLink}
                      to={content.imdbID}
                      color="#000000"
                    >
                      <SearchIcon />
                    </Link>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={Number(contentsData.totalResults)}
        page={filterValue.page - 1}
        rowsPerPage={10}
        onPageChange={(_, newPage) => {
          setFilterValue((prevState) => ({ ...prevState, page: newPage + 1 }));
        }}
        sx={{
          '& .MuiTablePagination-selectLabel, & .MuiTablePagination-select': {
            display: 'none',
          },
        }}
      />
    </>
  );
};

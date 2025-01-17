import { useQuery } from '@tanstack/react-query';

import { apiKey } from '../../../constants/api';
import { queryKey } from '../../../constants/queryKeys';
import { useFetch } from '../../../hooks/api/useFetch';

interface Search {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface GetContentsSuccessResponse {
  Response: string;
  Error: string;
  Search: Search[];
  totalResults: string;
}

export const useGetContents = ({
  page,
  search,
  year,
  type,
}: {
  page: number;
  search: string;
  year: string;
  type: string;
}) => {
  const { customFetch } = useFetch();

  let queryString = `?apikey=${apiKey}&page=${page}`;

  if (search) {
    queryString += `&s=${search}`;
  }
  if (year) {
    queryString += `&y=${year}`;
  }
  if (type) {
    queryString += `&type=${type}`;
  }

  const contents = useQuery({
    queryFn: async () => {
      const result = await customFetch<GetContentsSuccessResponse>({
        method: 'GET',
        url: queryString,
      });

      return result;
    },

    staleTime: 300000,

    queryKey: [queryKey.contents, { page, search, year, type }],
  });

  return { contents };
};

import { useQuery } from '@tanstack/react-query';

import { apiKey } from '../../../constants/api';
import { queryKey } from '../../../constants/queryKeys';
import { useFetch } from '../../../hooks/api/useFetch';

interface Rating {
  Source: string;
  Value: string;
}

interface GetContentSuccessResponse {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Rating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export const useGetContent = ({
  id,
  enabled = true,
}: {
  id: string;
  enabled: boolean;
}) => {
  const { customFetch } = useFetch();

  const content = useQuery({
    enabled,

    queryFn: async () => {
      const result = await customFetch<GetContentSuccessResponse>({
        method: 'GET',
        url: `?apikey=${apiKey}&i=${id}`,
      });

      return result;
    },

    staleTime: 300000,

    queryKey: [queryKey.content, { id }],
  });

  return { content };
};

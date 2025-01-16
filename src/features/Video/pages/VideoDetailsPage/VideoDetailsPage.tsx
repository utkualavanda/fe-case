import { useParams } from 'react-router-dom';

export const VideoDetailsPage = () => {
  const { id = '' } = useParams();
  return <>{id} details</>;
};

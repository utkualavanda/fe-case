import { lazy } from 'react';
import { WithSuspense } from '../../../../components/WithSuspense/WithSuspense';

export const LazyVideoDetailsPage = WithSuspense({
  Component: lazy(async () =>
    import('./VideoDetailsPage').then(({ VideoDetailsPage }) => ({
      default: VideoDetailsPage,
    }))
  ),
});

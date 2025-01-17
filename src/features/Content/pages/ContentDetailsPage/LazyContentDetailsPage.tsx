import { lazy } from 'react';

import { WithSuspense } from '../../../../components/WithSuspense/WithSuspense';

export const LazyContentDetailsPage = WithSuspense({
  Component: lazy(async () =>
    import('./ContentDetailsPage').then(({ ContentDetailsPage }) => ({
      default: ContentDetailsPage,
    }))
  ),
});

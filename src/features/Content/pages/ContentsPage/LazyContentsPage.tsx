import { lazy } from 'react';

import { WithSuspense } from '../../../../components/WithSuspense/WithSuspense';

export const LazyContentsPage = WithSuspense({
  Component: lazy(async () =>
    import('./ContentsPage').then(({ ContentsPage }) => ({
      default: ContentsPage,
    }))
  ),
});

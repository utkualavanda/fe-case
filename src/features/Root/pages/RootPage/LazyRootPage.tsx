import { lazy } from 'react';

import { WithSuspense } from '../../../../components/WithSuspense/WithSuspense';

export const LazyRootPage = WithSuspense({
  Component: lazy(async () =>
    import('./RootPage').then(({ RootPage }) => ({ default: RootPage }))
  ),
});

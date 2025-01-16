import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ROUTES } from './routeNames';
import { LazyRootPage } from '../features/Root/pages/RootPage/LazyRootPage';
import { LazyVideoDetailsPage } from '../features/Video/pages/VideoDetailsPage/LazyVideoDetailsPage';

const routeObject: RouteObject[] = [
  {
    children: [
      { path: `${ROUTES['videos']}/:id`, element: <LazyVideoDetailsPage /> },
    ],
    path: ROUTES['/'],
    element: <LazyRootPage />,
  },
  {
    path: '*',
    element: <>page not found</>,
  },
];

export const router = createBrowserRouter(routeObject);

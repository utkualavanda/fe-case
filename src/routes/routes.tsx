import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { LazyContentDetailsPage } from '../features/Content/pages/ContentDetailsPage/LazyContentDetailsPage';
import { LazyContentsPage } from '../features/Content/pages/ContentsPage/LazyContentsPage';
import { LazyRootPage } from '../features/Root/pages/RootPage/LazyRootPage';
import { ROUTES } from './routeNames';

const routeObject: RouteObject[] = [
  {
    children: [
      {
        path: ROUTES['contents'],
        element: <LazyContentsPage />,
      },
      {
        path: `${ROUTES['contents']}/:id`,
        element: <LazyContentDetailsPage />,
      },
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

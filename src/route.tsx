import { RouteObject, useRoutes } from 'react-router-dom';
import { LayoutApp } from './components/Layout';
import { Song } from './pages/Song';
import Book from 'pages/Book';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <Song />
      },
      {
        path: 'song',
        element: <Song />
      },
      {
        path: 'book',
        element: <Book />
      }
    ]
  }
];

export const App = () => {
  return useRoutes(routes);
};

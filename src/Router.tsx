import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useMantineColorScheme } from '@mantine/core';
import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Router() {
  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
    </>
  );
}

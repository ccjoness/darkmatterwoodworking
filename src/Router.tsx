import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useMantineColorScheme } from '@mantine/core';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Router() {
  const { setColorScheme } = useMantineColorScheme();
  setColorScheme('dark');
  return <RouterProvider router={router} />;
}

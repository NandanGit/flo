import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './AppRoutes';
import DashboardPage from '../../features/user/dashboard/ui/DashboardPage';
import HomePage from '../home/ui/HomePage';

const browserRouter = createBrowserRouter(
	[
		{
			path: Routes.HOME,
			element: <HomePage />,
		},
		{
			path: Routes.DASHBOARD,
			element: <DashboardPage />,
		},
		{
			path: '*',
			element: <h1>404! Page not found</h1>,
		},
	],
	{ basename: '/' }
);

const AppRouter: React.FC = () => {
	return <RouterProvider router={browserRouter} />;
};

export default AppRouter;

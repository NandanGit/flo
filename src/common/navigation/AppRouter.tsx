import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './AppRoutes';
import DashboardPage from '../../features/user/dashboard/ui/DashboardPage';
import HomePage from '../home/ui/HomePage';
import ProfilePage from '../../features/user/profile/ui/ProfilePage';
import SettingsPage from '../../features/user/settings/ui/SettingsPage';

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
			path: Routes.PROFILE,
			element: <ProfilePage />,
		},
		{
			path: Routes.SETTINGS,
			element: <SettingsPage />,
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

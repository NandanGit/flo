import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './AppRoutes';
import DashboardPage from '../../features/user/dashboard/ui/DashboardPage';
import HomePage from '../home/ui/HomePage';
import ProfilePage from '../../features/user/profile/ui/ProfilePage';
import SettingsPage from '../../features/user/settings/ui/SettingsPage';
import MerchantsPage from '../../features/merchants/ui/MerchantsPage';
import PeoplePage from '../../features/people/ui/PeoplePage';
import TransactionsPage from '../../features/transactions/ui/TransactionsPage';
import ActivityPage from '../../features/activity/ui/ActivityPage';
import { AppConstants } from '../../shared/constants/AppConstants';
import TimelinePage from '../../features/timeline/ui/TimelinePage';

const browserRouter = createBrowserRouter(
	[
		{ path: Routes.HOME, element: <HomePage /> },
		{ path: Routes.DASHBOARD, element: <DashboardPage /> },
		{ path: Routes.TIMELINE, element: <TimelinePage /> },
		{ path: Routes.PROFILE, element: <ProfilePage /> },
		{ path: Routes.SETTINGS, element: <SettingsPage /> },
		{ path: Routes.SETTINGS_SECTION, element: <SettingsPage /> },
		{ path: Routes.TRANSACTIONS, element: <TransactionsPage /> },
		{ path: Routes.MERCHANTS, element: <MerchantsPage /> },
		{ path: Routes.PEOPLE, element: <PeoplePage /> },
		{ path: Routes.ACTIVITY, element: <ActivityPage /> },
		{ path: '*', element: <h1>404! Page not found</h1> },
	],
	{ basename: AppConstants.appBaseRoute }
);

const AppRouter: React.FC = () => {
	return <RouterProvider router={browserRouter} />;
};

export default AppRouter;

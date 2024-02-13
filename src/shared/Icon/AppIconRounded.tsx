import QuestionMarkRounded from '@mui/icons-material/QuestionMarkRounded';

import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded';
import MenuRounded from '@mui/icons-material/MenuRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';
import CallRounded from '@mui/icons-material/CallRounded';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import SettingsRounded from '@mui/icons-material/SettingsRounded';

// Util Imports
import CloseRounded from '@mui/icons-material/CloseRounded';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';

import { AppIcons } from './AppIcons';
import { AppIconOptions } from './AppIconOptions';

const defaultOptions: AppIconOptions = {
	fontSize: 'large',
	color: 'inherit',
};

const AppIconRounded = (icon: AppIcons, options: AppIconOptions = {}) => {
	options = { ...defaultOptions, ...options };
	switch (icon) {
		case AppIcons.accountCircle:
			return <AccountCircleRounded {...options} />;
		case AppIcons.menu:
			return <MenuRounded {...options} />;
		case AppIcons.home:
			return <HomeRounded {...options} />;
		case AppIcons.dashboard:
			return <DashboardRounded {...options} />;
		case AppIcons.info:
			return <InfoRounded {...options} />;
		case AppIcons.call:
			return <CallRounded {...options} />;
		case AppIcons.logout:
			return <LogoutRounded {...options} />;
		case AppIcons.settings:
			return <SettingsRounded {...options} />;

		// Util Icons
		case AppIcons.close:
			return <CloseRounded {...options} />;
		case AppIcons.chevronLeft:
			return <ChevronLeftRounded {...options} />;
		case AppIcons.chevronRight:
			return <ChevronRightRounded {...options} />;
		case AppIcons.search:
			return <SearchRounded {...options} />;
		default: {
			console.error('No icon found for:', icon);
			return <QuestionMarkRounded {...options} />;
		}
	}
};

export default AppIconRounded;

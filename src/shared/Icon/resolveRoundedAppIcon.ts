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

const resolveRoundedMuiIcon = (icon?: AppIcons) => {
	switch (icon) {
		case AppIcons.accountCircle:
			return AccountCircleRounded;
		case AppIcons.menu:
			return MenuRounded;
		case AppIcons.home:
			return HomeRounded;
		case AppIcons.dashboard:
			return DashboardRounded;
		case AppIcons.info:
			return InfoRounded;
		case AppIcons.call:
			return CallRounded;
		case AppIcons.logout:
			return LogoutRounded;
		case AppIcons.settings:
			return SettingsRounded;

		// Util Icons
		case AppIcons.close:
			return CloseRounded;
		case AppIcons.chevronLeft:
			return ChevronLeftRounded;
		case AppIcons.chevronRight:
			return ChevronRightRounded;
		case AppIcons.search:
			return SearchRounded;
		default: {
			console.error('No icon found for:', icon);
			return QuestionMarkRounded;
		}
	}
};

export default resolveRoundedMuiIcon;

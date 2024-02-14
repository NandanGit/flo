import QuestionMarkTwoTone from '@mui/icons-material/QuestionMarkTwoTone';

import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import MenuTwoTone from '@mui/icons-material/MenuTwoTone';
import HomeTwoTone from '@mui/icons-material/HomeTwoTone';
import DashboardTwoTone from '@mui/icons-material/DashboardTwoTone';
import InfoTwoTone from '@mui/icons-material/InfoTwoTone';
import CallTwoTone from '@mui/icons-material/CallTwoTone';
import LogoutTwoTone from '@mui/icons-material/LogoutTwoTone';
import SettingsTwoTone from '@mui/icons-material/SettingsTwoTone';

// Util Imports
import CloseTwoTone from '@mui/icons-material/CloseTwoTone';
import ChevronLeftTwoTone from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightTwoTone from '@mui/icons-material/ChevronRightTwoTone';
import SearchTwoTone from '@mui/icons-material/SearchTwoTone';

import { AppIcons } from './AppIcons';

const resolveTwoToneMuiIcon = (icon?: AppIcons) => {
	switch (icon) {
		case AppIcons.accountCircle:
			return AccountCircleTwoTone;
		case AppIcons.menu:
			return MenuTwoTone;
		case AppIcons.home:
			return HomeTwoTone;
		case AppIcons.dashboard:
			return DashboardTwoTone;
		case AppIcons.info:
			return InfoTwoTone;
		case AppIcons.call:
			return CallTwoTone;
		case AppIcons.logout:
			return LogoutTwoTone;
		case AppIcons.settings:
			return SettingsTwoTone;

		// Util Icons
		case AppIcons.close:
			return CloseTwoTone;
		case AppIcons.chevronLeft:
			return ChevronLeftTwoTone;
		case AppIcons.chevronRight:
			return ChevronRightTwoTone;
		case AppIcons.search:
			return SearchTwoTone;
		default: {
			console.error('No icon found for:', icon);
			return QuestionMarkTwoTone;
		}
	}
};

export default resolveTwoToneMuiIcon;

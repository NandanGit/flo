import { useTheme } from '@mui/material';
import { AccountSummaryType } from './models/AccountSummaryType';

const useAccountSummaryTypeItemView = (type: AccountSummaryType) => {
	const theme = useTheme();
	let color: string;
	switch (type) {
		case AccountSummaryType.INCOME:
			color = theme.palette.success.dark;
			break;
		case AccountSummaryType.SPENDING:
			color = theme.palette.error.dark;
			break;
		case AccountSummaryType.BALANCE:
			color = theme.palette.info.dark;
			break;
		default:
			color = theme.palette.grey[500];
	}
	return {
		color,
	};
};

export default useAccountSummaryTypeItemView;

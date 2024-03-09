import { useTheme } from '@mui/material';

const useAccountSummaryCardView = () => {
	const theme = useTheme();
	return {
		theme,
	};
};

export default useAccountSummaryCardView;

import { useTheme } from '@mui/material';
import useTransactionsState from '../../redux/hooks/useTransactionsState';

const useTimelinePageView = () => {
	const { transactions, transactionsStatus } = useTransactionsState();
	const theme = useTheme();
	return {
		transactions,
		loading: transactionsStatus === 'loading',
		theme,
	};
};

export default useTimelinePageView;

import { Box, IconButton } from '@mui/material';
import { ReduxDataStatus } from '../../../redux/slices/types/common';
import { AppIcon, AppIcons } from '../../Icon';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

interface RefreshHeaderProps {
	title: React.ReactNode;
	dataStatus: ReduxDataStatus;
	onRefresh: () => void;
}

const RefreshHeader: React.FC<RefreshHeaderProps> = ({
	title,
	dataStatus,
	onRefresh,
}) => {
	const dataIsLoading = dataStatus === 'loading';
	return (
		<Box display='flex' justifyContent='space-between' alignItems='start'>
			{typeof title === 'string' ? <h2>{title}</h2> : title}
			<IconButton
				disabled={dataIsLoading}
				size='small'
				onClick={onRefresh}
				sx={{
					width: '2rem',
					height: '2rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{dataIsLoading ? (
					<LoadingSpinner loading={true} />
				) : (
					AppIcon(AppIcons.refresh)
				)}
			</IconButton>
		</Box>
	);
};

export default RefreshHeader;

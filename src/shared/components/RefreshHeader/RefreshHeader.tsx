/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, IconButton, Typography } from '@mui/material';
import { ReduxDataStatus } from '../../../redux/slices/types/common';
import { AppIcon, AppIcons } from '../../Icon';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { Placeholder } from '../Placeholder';

interface RefreshHeaderProps {
	title?: React.ReactNode;
	dataStatus: ReduxDataStatus;
	onRefresh: () => void;
}

const RefreshHeader: React.FC<RefreshHeaderProps> = ({
	title,
	dataStatus,
	onRefresh,
}) => {
	const dataIsLoading = dataStatus === 'loading';
	const refreshIconButton = (
		<>
			<IconButton
				disabled={dataIsLoading}
				onClick={onRefresh}
				sx={{
					width: '2rem',
					height: '2rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					transform: 'scale(0.8)',
					// transformOrigin: 'top right',
					...(title
						? {}
						: {
								// position: 'absolute',
								// // top: '1rem',
								// right: 0,
								// marginRight: '1rem',
						  }),
				}}
			>
				{dataIsLoading ? (
					<LoadingSpinner loading={true} />
				) : (
					AppIcon(AppIcons.refresh, {
						style: {
							// border: '1px solid teal',
						},
					})
				)}
			</IconButton>
		</>
	);
	// if (!title) return refreshIconButton;
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			alignItems='center'
			flexDirection='row-reverse'
			style={
				title
					? {}
					: {
							position: 'absolute',
							right: '0.5rem',
					  }
			}
			sx={{
				// border: '1px solid teal',
				alignSelf: 'stretch',
			}}
		>
			{refreshIconButton}
			{title && (
				<Placeholder loading={dataIsLoading}>
					{typeof title === 'string' ? (
						<Typography variant='body1'>{title}</Typography>
					) : (
						title
					)}
				</Placeholder>
			)}
		</Box>
	);
};

export default RefreshHeader;

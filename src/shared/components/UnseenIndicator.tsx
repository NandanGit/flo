import { Box } from '@mui/material';
import React from 'react';
import { truncateNumber } from '../../utils/number';

export interface UnseenIndicatorProps {
	unseen?: boolean;
	unseenCount?: number;
	// location?: 'app-drawer' | 'user-menu';
	space?: 'small' | 'medium' | 'large';
}

export const UnseenIndicator: React.FC<UnseenIndicatorProps> = ({
	unseen,
	unseenCount,
	// location = 'app-drawer',
	space = 'medium',
}) => {
	let containerWidth: string;
	switch (space) {
		case 'small':
			containerWidth = '0.25rem';
			break;
		case 'medium':
			containerWidth = '0.5rem';
			break;
		case 'large':
			containerWidth = '1.2rem';
			break;
		default:
			containerWidth = '1rem';
	}
	return (
		<Box
			sx={{
				marginRight: '0.8rem',
				position: 'relative',
				width: containerWidth,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',

					backgroundColor: 'Highlight',
					color: 'white',
					borderRadius: '1rem',
					padding: '0.25rem',
					fontSize: '0.75rem',

					opacity: unseen ? 1 : 0,
					minWidth: unseenCount ? '1.0rem' : '0.5rem',
					height: unseenCount ? '1.0rem' : '0.5rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{unseenCount ? truncateNumber(unseenCount, 1000) : ''}
			</Box>
		</Box>
	);
};

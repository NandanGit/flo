import { Box, BoxProps, Typography } from '@mui/material';
import React from 'react';

export interface SectionContentProps extends BoxProps {
	children: React.ReactNode;
	// title?: React.ReactNode;
	sectionTitle?: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({
	children,
	sx,
	sectionTitle,
	...props
}) => {
	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				// border: '1px solid #0666',
				overflow: 'scroll',
				// padding: '0 0.2rem',
				...sx,
			}}
			// variant='outlined'
			{...props}
		>
			{sectionTitle &&
				(typeof sectionTitle === 'string' ? (
					<Typography variant='h5'>{sectionTitle}</Typography>
				) : (
					sectionTitle
				))}
			{children}
		</Box>
	);
};

export default SectionContent;

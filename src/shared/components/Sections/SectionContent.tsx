import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface SectionContentProps extends BoxProps {
	children: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({
	children,
	sx,
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
				padding: '1rem',
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	);
};

export default SectionContent;

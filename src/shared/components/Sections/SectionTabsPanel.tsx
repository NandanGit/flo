import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface SectionTabsPanelProps extends BoxProps {
	children: React.ReactNode;
}

const SectionTabsPanel: React.FC<SectionTabsPanelProps> = ({
	children,
	sx,
	...props
}) => {
	return (
		<Box
			sx={{
				height: '100%',
				width: '15rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				overflow: 'scroll',
				// border: '1px solid #0666',
				// padding: '1rem',
				...sx,
			}}
			{...props}
		>
			{children}
		</Box>
	);
};

export default SectionTabsPanel;

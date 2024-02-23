/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Container, Paper, SxProps, Theme } from '@mui/material';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AppConstants } from '../constants/AppConstants';
import AppHeader from '../components/AppHeader/AppHeader';

export interface AppPageProps {
	children: React.ReactNode;
	useStaticGlassBackground?: boolean;
	title?: string | React.ReactElement;
	boxSx?: SxProps<Theme>;
}

export const AppPage: React.FC<AppPageProps> = ({
	children,
	title = AppConstants.name,
	useStaticGlassBackground = false,
	boxSx,
}) => {
	const appBarRef = useRef<HTMLDivElement>();
	const [containerHeight, setContainerHeight] = useState(0);

	useEffect(() => {
		document.title = title + ' | ' + AppConstants.name;
	}, [title]);

	useLayoutEffect(() => {
		if (appBarRef.current) {
			setContainerHeight(window.innerHeight - appBarRef.current.offsetHeight);
		}
	}, [appBarRef.current?.offsetHeight]);

	const content = useStaticGlassBackground ? (
		<Paper
			style={{
				overflow: 'hidden',
				height: containerHeight - 16,
				padding: '1rem',
			}}
		>
			<Box
				sx={{
					height: '100%',
					overflow: 'scroll',
					...boxSx,
				}}
			>
				{children}
			</Box>
		</Paper>
	) : (
		<React.Fragment>{children}</React.Fragment>
	);

	return (
		<React.Fragment>
			<AppHeader title={title} appBarRef={appBarRef} />
			<Container
				style={{
					// backgroundColor: 'Background',
					overflow: 'scroll',
					...(useStaticGlassBackground
						? {
								height: containerHeight,
						  }
						: {
								maxHeight: containerHeight,
								paddingBottom: '2rem',
						  }),
					position: 'relative',
					// paddingTop: '1rem',
				}}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					...boxSx,
				}}
			>
				{content}
			</Container>
		</React.Fragment>
	);
};

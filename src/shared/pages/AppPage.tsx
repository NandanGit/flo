/* eslint-disable no-mixed-spaces-and-tabs */
import { Container, Paper } from '@mui/material';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AppConstants } from '../constants/AppConstants';
import AppHeader from '../components/AppHeader/AppHeader';

export interface AppPageProps {
	children: React.ReactNode;

	title?: string | React.ReactElement;
	useStaticGlassBackground?: boolean;
}

export const AppPage: React.FC<AppPageProps> = ({
	children,
	title = AppConstants.name,
	useStaticGlassBackground = true,
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
				overflow: 'scroll',
				height: containerHeight - 16,
				padding: '1rem',
			}}
		>
			{children}
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
					// paddingTop: '1rem',
				}}
			>
				{content}
			</Container>
		</React.Fragment>
	);
};

import { Container } from '@mui/material';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AppConstants } from '../constants/AppConstants';
import AppHeader from '../components/AppHeader/AppHeader';

export interface AppPageProps {
	children: React.ReactNode;

	title?: string | React.ReactElement;
}

export const AppPage: React.FC<AppPageProps> = ({
	children,
	title = AppConstants.name,
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

	return (
		<React.Fragment>
			<AppHeader title={title} appBarRef={appBarRef} />
			<Container
				style={{
					// backgroundColor: 'Background',
					overflow: 'scroll',
					maxHeight: containerHeight,
					// paddingTop: '1rem',
					paddingBottom: '2rem',
				}}
			>
				{children}
			</Container>
		</React.Fragment>
	);
};

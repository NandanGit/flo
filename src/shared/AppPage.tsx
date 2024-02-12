import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { AppConstants } from '../constants/AppConstants';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';
import UserMenu from './UserMenu';
import AppDrawer from '../common/navigation/AppDrawer';

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
	const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
		null
	);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setUserMenuAnchorEl(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setUserMenuAnchorEl(null);
	};

	useLayoutEffect(() => {
		if (appBarRef.current) {
			setContainerHeight(window.innerHeight - appBarRef.current.offsetHeight);
		}
	}, [appBarRef.current?.offsetHeight]);

	return (
		<React.Fragment>
			<div ref={appBarRef as React.RefObject<HTMLDivElement>}>
				<AppBar
					position='static'
					style={{
						minHeight: '5rem',
					}}
				>
					<Toolbar>
						{/* Hamburger menu */}
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2, display: { sm: 'none' } }}
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>

						{/* Title */}
						{typeof title === 'string' ? (
							<Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
								{title}
							</Typography>
						) : (
							title
						)}

						{/* Profile & Account */}
						<div>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenUserMenu}
								color='inherit'
							>
								<AccountCircle />
							</IconButton>
							<UserMenu
								anchorEl={userMenuAnchorEl}
								handleCloseMenu={handleCloseUserMenu}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
			<AppDrawer open={mobileOpen} onDrawerToggle={handleDrawerToggle} />
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

import {
	AppBar,
	Avatar,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { AppConstants } from './constants/AppConstants';
import UserMenu from './UserMenu';
import AppDrawer from '../common/navigation/AppDrawer';
import { useNavigate } from 'react-router-dom';
import { AppIcon, AppIcons } from './Icon';
import { useUserMocker } from '../mockers/userMocker';
import { Placeholder } from './Placeholder';

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

	const navigate = useNavigate();

	useLayoutEffect(() => {
		if (appBarRef.current) {
			setContainerHeight(window.innerHeight - appBarRef.current.offsetHeight);
		}
	}, [appBarRef.current?.offsetHeight]);

	const user = useUserMocker();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setUserMenuAnchorEl(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setUserMenuAnchorEl(null);
	};

	const canGoBack = () => {
		return false; // TODO: Fix this
	};

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
						{canGoBack() ? (
							// Back button
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='back-button'
								sx={{ mr: 2 }}
								onClick={() => navigate(-1)}
							>
								{AppIcon(AppIcons.chevronLeft)}
							</IconButton>
						) : null}
						{/* Hamburger menu */}
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{
								mr: 2,
								display: {
									// sm: 'none'
								},
							}}
							onClick={handleDrawerToggle}
						>
							{AppIcon(AppIcons.menu)}
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
								size='small'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenUserMenu}
								color='inherit'
							>
								<Placeholder loading={!user} variant='circular'>
									<Avatar
										alt='User'
										// src='#'
										src={user?.avatar}
									/>
								</Placeholder>
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

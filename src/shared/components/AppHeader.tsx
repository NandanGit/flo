import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppDrawer from '../../common/navigation/AppDrawer';
import UserMenu from '../../features/user/ui/UserMenu';
import { AppIcon, AppIcons } from '../Icon';
import { Placeholder } from './Placeholder';
import { AppConstants } from '../constants/AppConstants';

interface AppHeaderProps {
	title?: React.ReactNode | string;
	appBarRef: ReturnType<typeof useRef<HTMLDivElement>>;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
	title = AppConstants.name,
	appBarRef,
}) => {
	const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
		null
	);
	const [mobileOpen, setMobileOpen] = useState(false);

	const navigate = useNavigate();

	const user = true; //useUserMocker();

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
										src='#'
										// src={user?.avatar}
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
		</React.Fragment>
	);
};

export default AppHeader;

// /**
//  * Create app header component that can reused across the app
//  */

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppIcon, AppIcons } from '../Icon';
// import { AppConstants } from '../../common/constants/AppConstants';
// import { useNavigate } from 'react-router-dom';
// import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import { AppDrawer } from '../../common/navigation/AppDrawer';
// import { useAppSelector } from '../../app/hooks';
// import { selectUser } from '../../features/user/userSlice';
// import { AppActions } from '../../common/actions/AppActions';
// import { MenuItemModel } from '../models/MenuItemModel';
// import { UnseenIndicator } from './UnseenIndicator';
// import { sleep } from '../../utils/time';

// export interface AppHeaderProps {
// 	title?: string;
// }

// export const AppHeader: React.FC<AppHeaderProps> = ({
// 	title = AppConstants.name,
// }) => {
// 	const navigate = useNavigate();
// 	const user = useAppSelector(selectUser);

// 	const [mobileOpen, setMobileOpen] = React.useState(false);
// 	const handleDrawerToggle = () => {
// 		setMobileOpen(!mobileOpen);
// 	};

// 	const handleDrawerItemSelect = async (item: MenuItemModel) => {
// 		// Close the drawer
// 		setMobileOpen(false);
// 		await sleep(200); // For the drawer to close
// 		if (item.route) {
// 			console.log('Navigating to:', item.route);
// 			navigate(item.route);
// 		} else if (item.action) {
// 			if (item.action === AppActions.LOGOUT) {
// 				console.log('Logging out...(fake logout)');
// 			}
// 		}
// 	};

// 	const createMenuItem = (item: MenuItemModel, showUnseen: boolean) => {
// 		return (
// 			<Box key={item.label} sx={{ textAlign: 'center' }}>
// 				<Link to={item.route || ''} style={{ textDecoration: 'none' }}>
// 					<IconButton onClick={() => handleDrawerItemSelect(item)}>
// 						<AppIcon icon={item.icon || AppIcons.MENU} />
// 					</IconButton>
// 					<Typography variant='body1'>{item.label}</Typography>
// 				</Link>
// 				{showUnseen && (
// 					<UnseenIndicator
// 						unseen={item.unseen}
// 						unseenCount={item.unseenCount}
// 						// location='app-drawer'
// 						space='large'
// 					/>
// 				)}
// 			</Box>
// 		);
// 	};

// 	return (
// 		<AppBar position='fixed'>
// 			<Toolbar>
// 				<IconButton
// 					edge='start'
// 					color='inherit'
// 					aria-label='menu'
// 					onClick={handleDrawerToggle}
// 				>
// 					<AppIcon icon={AppIcons.MENU} />
// 				</IconButton>
// 				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
// 					{title}
// 				</Typography>
// 				<Box>
// 					{user && user.username && (
// 						<IconButton
// 							edge='end'
// 							color='inherit'
// 							aria-label='user'
// 							onClick={() =>
// 								handleDrawerItemSelect({
// 									label: user.username,
// 									action: AppActions.PROFILE,
// 								})
// 							}
// 						>
// 							<AppIcon icon={AppIcons.USER} />
// 						</IconButton>
// 					)}
// 				</Box>
// 			</Toolbar>
// 			<AppDrawer open={mobileOpen} onDrawerToggle={handleDrawerToggle} />
// 		</AppBar>
// 	);
// };

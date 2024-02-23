import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@mui/material';
import React, { useRef } from 'react';
import AppDrawer from '../../../common/navigation/AppDrawer';
import UserMenu from '../../../features/user/ui/UserMenu';
import { AppIcon, AppIcons } from '../../Icon';
import { Placeholder } from '../Placeholder';
import { AppConstants } from '../../constants/AppConstants';
import useAppHeaderView from './useAppHeaderView';

interface AppHeaderProps {
	title?: React.ReactNode | string;
	appBarRef: ReturnType<typeof useRef<HTMLDivElement>>;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
	title = AppConstants.name,
	appBarRef,
}) => {
	const {
		userMenuAnchorEl,
		mobileOpen,
		userProfile,
		userStatus,
		navigate,
		handleDrawerToggle,
		handleOpenUserMenu,
		handleCloseUserMenu,
		canGoBack,
	} = useAppHeaderView();

	return (
		<React.Fragment>
			<div ref={appBarRef as React.RefObject<HTMLDivElement>}>
				<AppBar
					position='static'
					style={{
						minHeight: '4rem',
					}}
				>
					<Toolbar
						style={{
							paddingLeft: '0.5rem',
							paddingRight: '0.5rem',
							opacity: 0.8,
						}}
					>
						{canGoBack() ? (
							// Back button
							<IconButton
								edge='start'
								color='inherit'
								aria-label='back-button'
								sx={{ mr: 1 }}
								onClick={() => navigate(-1)}
							>
								{AppIcon(AppIcons.chevronLeft)}
							</IconButton>
						) : null}
						{/* Hamburger menu */}
						<IconButton
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
							<Typography
								variant='h6'
								component='div'
								sx={{
									flexGrow: 1,
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								}}
							>
								{title}
							</Typography>
						) : (
							title
						)}

						{/* Profile & Account */}
						<div>
							<IconButton
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenUserMenu}
								color='inherit'
							>
								<Placeholder
									loading={userStatus === 'loading'}
									variant='circular'
								>
									<Avatar
										alt={userProfile?.name || 'User'}
										// src='#'
										// src={undefined}
										src={userProfile?.avatar}
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

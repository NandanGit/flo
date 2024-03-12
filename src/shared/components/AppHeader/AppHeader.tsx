import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Avatar,
	Box,
	Breadcrumbs,
	Link,
} from '@mui/material';
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
	title = AppConstants.appName,
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
						{/* {typeof title === 'string' ? (
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
						)} */}

						{/* AppHeader Content */}
						<Box
							sx={{
								flexGrow: 1,
							}}
						>
							<Breadcrumbs
								maxItems={2}
								separator={AppIcon(AppIcons.chevronRight, {
									style: {
										fontSize: '1.5rem',
									},
								})}
							>
								<Link underline='hover' color='inherit' href='#'>
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
										{AppConstants.appName}
									</Typography>
								</Link>
								{/* <Link underline='hover' color='inherit' href='#'>
									Catalog
								</Link>
								<Link underline='hover' color='inherit' href='#'>
									Accessories
								</Link>
								<Link underline='hover' color='inherit' href='#'>
									New Collection
								</Link> */}
								<Typography
									variant='h6'
									component='div'
									color={'text.primary'}
									sx={{
										flexGrow: 1,
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap',
									}}
								>
									{title}
								</Typography>
							</Breadcrumbs>
						</Box>

						{/* Profile & Account */}
						<Box display='flex' alignItems='center'>
							<IconButton
								aria-label='profile of current user'
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
										sx={{
											width: '2.5rem',
											height: '2.5rem',
										}}
									/>
								</Placeholder>
							</IconButton>
							<UserMenu
								anchorEl={userMenuAnchorEl}
								handleCloseMenu={handleCloseUserMenu}
							/>
						</Box>
					</Toolbar>
				</AppBar>
			</div>
			<AppDrawer open={mobileOpen} onDrawerToggle={handleDrawerToggle} />
		</React.Fragment>
	);
};

export default AppHeader;

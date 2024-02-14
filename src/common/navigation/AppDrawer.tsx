import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { AppConstants } from '../../shared/constants/AppConstants';
import { MenuData } from '../../shared/MenuData';
import { useNavigate } from 'react-router-dom';
import { Routes } from './AppRoutes';
import { MenuItemModel } from '../../shared/models/MenuItemModel';
import { AppActions } from '../actions/AppActions';
import { AppIcon, AppIcons } from '../../shared/Icon';

interface AppDrawerProps {
	open: boolean;
	onDrawerToggle: () => void;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, onDrawerToggle }) => {
	const navigate = useNavigate();

	const handleDrawerItemSelect = (item: MenuItemModel) => {
		// Close the drawer
		onDrawerToggle();
		if (item.route) {
			console.log('Navigating to:', item.route);
			navigate(item.route);
		} else if (item.action) {
			// TODO: Run the action here
			navigate(-1);
		} else {
			console.error('No route or action provided for menu item:', item);
		}
	};

	return (
		<nav>
			<Drawer
				container={window.document.body}
				variant='temporary'
				open={open}
				onClose={onDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: {
						xs: 'block',
						// sm: 'none'
					},
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: '15rem' },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
					}}
				>
					<Typography
						variant='h5'
						component='div'
						style={{
							padding: '2rem',
							cursor: 'pointer',
						}}
						onClick={() =>
							handleDrawerItemSelect({
								label: 'Home',
								route: Routes.HOME,
							})
						}
					>
						{AppConstants.name}
					</Typography>
					<List
						style={{
							flex: 1,
						}}
					>
						{MenuData.drawerMenuItems.map((item) => (
							<ListItem key={item.label} disablePadding>
								<ListItemButton
									sx={{
										textAlign: 'center',
									}}
									onClick={() => handleDrawerItemSelect(item)}
								>
									<ListItemText primary={item.label} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
					<List>
						<ListItem disablePadding>
							<ListItemButton
								sx={{
									textAlign: 'center',
								}}
								onClick={() =>
									handleDrawerItemSelect({
										label: 'Logout',
										action: AppActions.LOGOUT,
									})
								}
							>
								{/* <ListItemText primary='Logout' /> */}
								{AppIcon(AppIcons.logout, {
									style: {
										marginRight: '0.5rem',
									},
									fontSize: 'small',
								})}
								<ListItemText>
									<span
										style={{
											fontSize: '0.8rem',
										}}
									>
										Logout
									</span>
								</ListItemText>
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</nav>
	);
};

export default AppDrawer;

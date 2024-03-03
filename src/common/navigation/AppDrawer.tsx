import { Box, Drawer, List, Typography } from '@mui/material';
import { AppConstants } from '../../shared/constants/AppConstants';
import { MenuData } from '../../shared/data/MenuData';
import { useNavigate } from 'react-router-dom';
import { Routes } from './AppRoutes';
import { sleep } from '../../utils/time';
import { AppActions } from '../actions/AppActions';
import useLoc from '../../hooks/useLoc';
import CustomClickableListItem from '../../shared/components/custom/CustomClickableListItem';
import { AppDrawerMenuItemModel } from '../../shared/models/menu-item/AppDrawerMenuItemModel';

interface AppDrawerProps {
	open: boolean;
	onDrawerToggle: () => void;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, onDrawerToggle }) => {
	const navigate = useNavigate();
	const loc = useLoc();

	const handleDrawerItemSelect = async (item: AppDrawerMenuItemModel) => {
		// Close the drawer
		onDrawerToggle();
		await sleep(200); // For the drawer to close
		if (item.route) {
			console.log('Navigating to:', item.route);
			navigate(item.route);
		} else if (item.action) {
			// TODO: Run the action here
			if (item.action === AppActions.LOGOUT) {
				console.log('Logging out...(fake logout)');
			}
		} else {
			console.error('No route or action provided for menu item:', item);
		}
	};

	const logoutMenuItem = MenuData.getLogoutMenuItem(loc);

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
								label: '',
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
						{MenuData.getDrawerMenuItems(loc).map((item) => (
							<CustomClickableListItem
								key={item.label}
								item={item}
								showUnseen
								onClick={() => handleDrawerItemSelect(item)}
							/>
						))}
					</List>
					<List>
						<CustomClickableListItem item={logoutMenuItem} onClick={() => {}} />
					</List>
				</Box>
			</Drawer>
		</nav>
	);
};

export default AppDrawer;

import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { AppConstants } from '../../constants/AppConstants';
import { MenuData } from '../../shared/MenuData';
import { useNavigate } from 'react-router-dom';
import { Routes } from './AppRoutes';

interface AppDrawerProps {
	open: boolean;
	onDrawerToggle: () => void;
}

const AppDrawer: React.FC<AppDrawerProps> = ({ open, onDrawerToggle }) => {
	const navigate = useNavigate();
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
					display: { xs: 'block', sm: 'none' },
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
						}}
						onClick={() => navigate(Routes.HOME)}
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
									onClick={() => {
										if (item.route) {
											console.log('Navigating to:', item.route);
											navigate(item.route);
										} else if (item.action) {
											// TODO: Run the action here
										} else {
											console.error(
												'No route or action provided for menu item:',
												item
											);
										}
									}}
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
							>
								<ListItemText primary='Logout' />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</nav>
	);
};

export default AppDrawer;

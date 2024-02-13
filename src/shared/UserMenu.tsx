import { Menu, MenuItem } from '@mui/material';
import { MenuData } from './MenuData';
import { useNavigate } from 'react-router-dom';

interface UserMenuProps {
	anchorEl: HTMLElement | null;
	handleCloseMenu: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
	anchorEl: userMenuAnchorEl,
	handleCloseMenu: handleCloseUserMenu,
}) => {
	const navigate = useNavigate();
	return (
		<Menu
			id='menu-appbar'
			anchorEl={userMenuAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={Boolean(userMenuAnchorEl)}
			onClose={handleCloseUserMenu}
		>
			{...MenuData.userMenuItems.map((item) => (
				<MenuItem
					onClick={() => {
						if (item.route) {
							navigate(item.route);
						} else if (item.action) {
							// TODO: Run the action here
						} else {
							console.error('No route or action provided for menu item:', item);
						}
					}}
				>
					{item.label}
				</MenuItem>
			))}
			{/* <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
  <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
  <MenuItem onClick={handleCloseUserMenu}>Dashboard</MenuItem> */}
		</Menu>
	);
};

export default UserMenu;

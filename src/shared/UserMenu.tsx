import { Divider, Menu, MenuItem } from '@mui/material';
import { MenuData } from './MenuData';
import { useNavigate } from 'react-router-dom';
import { AppIcon } from './Icon';
import { MenuItemModel } from './models/MenuItemModel';

interface UserMenuProps {
	anchorEl: HTMLElement | null;
	handleCloseMenu: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
	anchorEl: userMenuAnchorEl,
	handleCloseMenu: handleCloseUserMenu,
}) => {
	const navigate = useNavigate();

	const handleMenuItemSelect = (item: MenuItemModel) => {
		if (item.route) {
			navigate(item.route);
		} else if (item.action) {
			// TODO: Run the action here
		} else {
			console.error('No route or action provided for menu item:', item);
		}
	};

	const logoutMenuItem = MenuData.logoutMenuItem;

	const createMenuItem = (item: MenuItemModel) => {
		return (
			<MenuItem onClick={() => handleMenuItemSelect(item)}>
				{AppIcon(item.icon, {
					style: {
						marginRight: '0.6rem',
					},
					fontSize: 'medium',
				})}
				<span
					style={{
						fontSize: '0.85rem',
					}}
				>
					{item.label}
				</span>
				{/* <ListItemIcon>
						{AppIcon(item.icon, { fontSize: 'medium' })}
					</ListItemIcon>
					<ListItemText
						style={{
							fontSize: '0.7rem',
						}}
					>
						{item.label}
					</ListItemText> */}
			</MenuItem>
		);
	};

	return (
		<Menu
			id='menu-appbar'
			anchorEl={userMenuAnchorEl}
			anchorOrigin={{
				vertical: 'bottom',
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
			{...MenuData.userMenuItems.map(createMenuItem)}
			<Divider />
			{createMenuItem(logoutMenuItem)}
		</Menu>
	);
};

export default UserMenu;

import { Divider, Menu } from '@mui/material';
import { MenuData } from '../../../shared/data/MenuData';
import { useNavigate } from 'react-router-dom';
import { MenuItemModel } from '../../../shared/models/MenuItemModel';
import useLoc from '../../../hooks/useLoc';
import CustomMenuItem from '../../../shared/components/custom/CustomMenuItem';

interface UserMenuProps {
	anchorEl: HTMLElement | null;
	handleCloseMenu: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
	anchorEl: userMenuAnchorEl,
	handleCloseMenu: handleCloseUserMenu,
}) => {
	const navigate = useNavigate();
	const loc = useLoc();

	const handleMenuItemSelect = (item: MenuItemModel) => {
		if (item.route) {
			navigate(item.route);
		} else if (item.action) {
			// TODO: Run the action here
		} else {
			console.error('No route or action provided for menu item:', item);
		}
	};

	const logoutMenuItem = MenuData.getLogoutMenuItem(loc);

	const userMenuItems = MenuData.getUserMenuItems(loc);

	const atLeastOneUnseen = userMenuItems.some((item) => item.unseen);
	const atLeaseOneLargerUnseen = userMenuItems.some(
		(item) => item.unseenCount && item.unseenCount > 1000
	);

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
			{...userMenuItems.map((item) => (
				<CustomMenuItem
					item={item}
					showUnseen={atLeastOneUnseen}
					showLargerUnseen={atLeaseOneLargerUnseen}
					onClick={() => handleMenuItemSelect(item)}
				/>
			))}
			<Divider />
			<CustomMenuItem item={logoutMenuItem} onClick={() => {}} />
		</Menu>
	);
};

export default UserMenu;

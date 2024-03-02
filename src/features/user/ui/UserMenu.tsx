import { Divider, Menu, MenuItem } from '@mui/material';
import { MenuData } from '../../../shared/data/MenuData';
import { useNavigate } from 'react-router-dom';
import { AppIcon } from '../../../shared/Icon';
import { MenuItemModel } from '../../../shared/models/MenuItemModel';
import { UnseenIndicator } from '../../../shared/components/UnseenIndicator';
import useLoc from '../../../hooks/useLoc';

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

	const createMenuItem = (
		item: MenuItemModel,
		showUnseen: boolean,
		showLargerUnseen: boolean
	) => {
		return (
			<MenuItem onClick={() => handleMenuItemSelect(item)}>
				{showUnseen && (
					<UnseenIndicator
						unseen={item.unseen}
						unseenCount={item.unseenCount}
						// location='user-menu'
						space={showLargerUnseen ? 'large' : 'medium'}
					/>
				)}
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
			</MenuItem>
		);
	};

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
			{...userMenuItems.map((item) =>
				createMenuItem(item, atLeastOneUnseen, atLeaseOneLargerUnseen)
			)}
			<Divider />
			{createMenuItem(logoutMenuItem, false, false)}
		</Menu>
	);
};

export default UserMenu;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserState from '../../../redux/hooks/useUserState';

const useAppHeaderView = () => {
	const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
		null
	);
	const [mobileOpen, setMobileOpen] = useState(false);

	const { userProfile, userStatus } = useUserState();

	const navigate = useNavigate();

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

	return {
		userMenuAnchorEl,
		mobileOpen,
		userProfile,
		userStatus,
		navigate,
		handleDrawerToggle,
		handleOpenUserMenu,
		handleCloseUserMenu,
		canGoBack,
	};
};

export default useAppHeaderView;

import {
	Card,
	Avatar,
	CardHeader,
	useTheme,
	ListItem,
	ListItemButton,
} from '@mui/material';
import React from 'react';
import { Placeholder } from '../../../../shared/components/Placeholder';
import useUserState from '../../../../redux/hooks/useUserState';
import { RGBA } from '../../../../utils/color/RGBA';

export interface AccountSettingsTabCardProps {
	isSelected: boolean;
	onClick?: () => void;
}

const AccountSettingsTabCard: React.FC<AccountSettingsTabCardProps> = ({
	isSelected,
	onClick,
}) => {
	const { userProfile, userStatus } = useUserState();
	const theme = useTheme();
	console.log('Primary: ', theme.palette.primary.dark);
	const primaryDark = new RGBA(theme.palette.primary.dark);

	return (
		<ListItem disablePadding>
			<ListItemButton
				style={{
					padding: '0',
					// overflow: 'clip',
					borderRadius: '0.75rem',
					overflow: 'clip',
				}}
				onClick={onClick}
				disableRipple
			>
				<Card
					style={{
						backgroundImage: 'none',
						backgroundColor: primaryDark
							.withOpacity(isSelected ? 0.3 : 0.15)
							.toString(),
						cursor: 'pointer',
						width: '100%',
						boxShadow: 'none',
					}}
				>
					<CardHeader
						style={{
							padding: '0.5rem',
							width: '100%',
						}}
						avatar={
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
						}
						title={
							<span
								style={{
									// color: isSelected ? theme.palette.primary.dark : 'inherit',
									opacity: 0.9,
								}}
							>
								<Placeholder
									loading={userStatus === 'loading'}
									// loading
									width='100%'
								>
									{userProfile?.name}
								</Placeholder>
							</span>
						}
						subheader={
							<span
								style={{
									fontSize: '0.6rem',
									// color: isSelected ? theme.palette.primary.dark : 'inherit',
									opacity: 0.8,
								}}
							>
								<Placeholder
									loading={userStatus === 'loading'}
									// loading
									width='80%'
									//
								>
									{userProfile?.phone}
								</Placeholder>
							</span>
						}
					/>
				</Card>
			</ListItemButton>
		</ListItem>
	);
};

export default AccountSettingsTabCard;

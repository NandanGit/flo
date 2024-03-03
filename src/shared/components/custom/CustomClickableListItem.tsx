import {
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import React from 'react';
import { AppIcon } from '../../Icon';
import { UnseenIndicator } from '../UnseenIndicator';
import { MenuItemModel } from '../../models/menu-item/MenuItemModel';

export interface CustomClickableListItemProps {
	item: MenuItemModel;
	showUnseen?: boolean;
	isSelected?: boolean;
	onClick: () => void;
}

const CustomClickableListItem: React.FC<CustomClickableListItemProps> = ({
	item,
	showUnseen = false,
	isSelected = false,
	onClick,
}) => {
	const theme = useTheme();
	return (
		<ListItem disablePadding>
			<ListItemButton
				sx={{
					textAlign: 'center',
					backgroundColor: isSelected
						? theme.palette.action.hover
						: 'transparent',
				}}
				onClick={onClick}
			>
				{showUnseen && (
					<UnseenIndicator
						unseen={item.unseen}
						unseenCount={item.unseenCount}
						// location='app-drawer'
						space='large'
					/>
				)}
				{AppIcon(item.icon, {
					style: {
						marginRight: '0.5rem',
						// fontSize: '2rem',
						color: isSelected ? theme.palette.primary.dark : 'auto',
					},
					fontSize: 'medium',
				})}
				<ListItemText
					style={{
						textAlign: 'left',
					}}
				>
					<span
						style={{
							fontSize: '0.85rem',
							color: isSelected ? theme.palette.primary.dark : 'auto',
						}}
					>
						{item.label}
					</span>
				</ListItemText>
				{isSelected && (
					<div
						style={{
							position: 'absolute',
							left: 0,
							top: '50%',
							transform: 'translate(0.2rem,-50%)',
							width: '0.2rem',
							height: '60%',
							borderRadius: '1rem',
							backgroundColor: theme.palette.primary.dark,
						}}
					/>
				)}
			</ListItemButton>
		</ListItem>
	);
};

export default CustomClickableListItem;

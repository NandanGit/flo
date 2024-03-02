import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { AppIcon } from '../../Icon';
import { UnseenIndicator } from '../UnseenIndicator';
import { MenuItemModel } from '../../models/MenuItemModel';

export interface CustomClickableListItemProps {
	item: MenuItemModel;
	showUnseen?: boolean;
	onClick: () => void;
}

const CustomClickableListItem: React.FC<CustomClickableListItemProps> = ({
	item,
	showUnseen = false,
	onClick,
}) => {
	return (
		<ListItem disablePadding>
			<ListItemButton
				sx={{
					textAlign: 'center',
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
						}}
					>
						{item.label}
					</span>
				</ListItemText>
			</ListItemButton>
		</ListItem>
	);
};

export default CustomClickableListItem;

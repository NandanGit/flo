import { MenuItem } from '@mui/material';
import React from 'react';
import { AppIcon } from '../../Icon';
import { UnseenIndicator } from '../UnseenIndicator';
import { MenuItemModel } from '../../models/MenuItemModel';

export interface CustomMenuItemProps {
	item: MenuItemModel;
	showUnseen?: boolean;
	showLargerUnseen?: boolean;
	onClick: () => void;
}

const CustomMenuItem: React.FC<CustomMenuItemProps> = ({
	item,
	showUnseen = false,
	showLargerUnseen = false,
	onClick,
}) => {
	return (
		<MenuItem onClick={onClick}>
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

export default CustomMenuItem;

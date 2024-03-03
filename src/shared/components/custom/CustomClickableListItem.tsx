import {
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from '@mui/material';
import { AppIcon } from '../../Icon';
import { UnseenIndicator } from '../UnseenIndicator';
import { BaseMenuItemModel } from '../../models/menu-item/BaseMenuItemModel';

export interface CustomClickableListItemProps<T> {
	item: T;
	showUnseen?: boolean;
	isSelected?: boolean;
	disabled?: boolean;
	onClick: () => void;
}

const CustomClickableListItem = <T extends BaseMenuItemModel>({
	item,
	showUnseen = false,
	isSelected = false,
	disabled = false,
	onClick,
}: CustomClickableListItemProps<T>) => {
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
				disabled={disabled}
				disableRipple
			>
				{showUnseen && (
					<UnseenIndicator
						unseen={item.unseen}
						unseenCount={item.unseenCount}
						// location='app-drawer'
						space='large'
					/>
				)}
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginRight: '0.5rem',
					}}
				>
					{item.iconElement ||
						AppIcon(item.icon, {
							style: {
								// marginRight: '0.5rem',
								// fontSize: '2rem',
								color: isSelected ? theme.palette.primary.dark : 'inherit',
								opacity: isSelected ? 1 : 0.8,
							},
							fontSize: 'medium',
						})}
				</div>
				<ListItemText
					style={{
						textAlign: 'left',
					}}
				>
					<span
						style={{
							fontSize: '0.85rem',
							color: isSelected ? theme.palette.primary.dark : 'inherit',
							opacity: isSelected ? 1 : 0.8,
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

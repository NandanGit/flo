import { Box, Typography } from '@mui/material';
import React from 'react';
import { Currency } from '../../shared/types/currency';
import { AccountSummaryType } from './models/AccountSummaryType';
import useAccountSummaryTypeItemView from './AccountSummaryTypeItemView';
import { RGBA } from '../../utils/color/RGBA';
import { resolveCurrencySymbol } from '../../utils/currency';

export interface AccountSummaryTypeItemProps {
	type: AccountSummaryType;
	title: string;
	amount: string;
	currency: Currency;
}

const AccountSummaryTypeItem: React.FC<AccountSummaryTypeItemProps> = ({
	title,
	amount,
	currency,
	type,
}) => {
	const { color } = useAccountSummaryTypeItemView(type);
	const typeColor = new RGBA(color);
	return (
		<Box
			// variant='outlined'
			style={{
				padding: '0.25rem 0.5rem',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: typeColor.withOpacity(0.2),
				borderRadius: '0.5rem',
			}}
		>
			<Typography
				style={{
					fontSize: '0.6rem',
					textTransform: 'uppercase',
					color: typeColor.withOpacity(0.7),
				}}
			>
				{title}
			</Typography>
			<Typography
				style={{
					// display: 'flex',
					// flexDirection: 'row',
					// justifyContent: 'space-between',
					alignItems: 'center',
					fontSize: '0.8rem',
					color: typeColor.withOpacity(1),
				}}
			>
				{`${resolveCurrencySymbol(currency)} ${amount}`}
			</Typography>
		</Box>
	);
};

export default AccountSummaryTypeItem;

import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { RGBA } from '../../utils/color/RGBA';
import useAccountSummaryCardView from './AccountSummaryCardView';
import AccountSummaryTypeItem from './AccountSummaryTypeItem';
import { AccountSummaryType } from './models/AccountSummaryType';
import useLoc from '../../hooks/useLoc';

export interface AccountSummaryCardProps {}

const AccountSummaryCard: React.FC<AccountSummaryCardProps> = () => {
	const { theme } = useAccountSummaryCardView();
	const primaryColor = new RGBA(theme.palette.primary.dark);
	const loc = useLoc();
	return (
		<Card
			variant='outlined'
			style={{
				padding: '0.5rem 0.8rem 0.8rem',
				backgroundColor: primaryColor.withOpacity(0.1),
			}}
		>
			<Typography
				style={{
					textAlign: 'center',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					fontSize: '1.1rem',
					marginBottom: '0.5rem',
					color: primaryColor.withOpacity(0.8),
				}}
			>
				{loc.sAccountSummary}
			</Typography>
			<Box
				// Grid display with two columns
				display='grid'
				gridTemplateColumns='1fr 1fr'
				gap='0.4rem'
			>
				<AccountSummaryTypeItem
					type={AccountSummaryType.INCOME}
					title={loc.sIncome}
					amount={'72,342'}
					currency='INR'
				/>
				<AccountSummaryTypeItem
					type={AccountSummaryType.SPENDING}
					title={loc.sSpending}
					amount={'4,321'}
					currency='INR'
				/>
				<AccountSummaryTypeItem
					type={AccountSummaryType.BALANCE}
					title={loc.sBalance}
					amount={'68,021'}
					currency='INR'
				/>
				<AccountSummaryTypeItem
					type={AccountSummaryType.CARRYOVER}
					title={loc.sCarryover}
					amount={'2,671'}
					currency='INR'
				/>
			</Box>
		</Card>
	);
};

export default AccountSummaryCard;

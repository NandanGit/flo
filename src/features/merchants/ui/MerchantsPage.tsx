import { List, ListItem, ListItemText } from '@mui/material';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';
import { AppPage } from '../../../shared/pages/AppPage';
import { useMerchantsPageView } from '../MerchantsPageView';
import useLoc from '../../../hooks/useLoc';

const MerchantsPage: React.FC = () => {
	const { merchantsStatus, merchants, loadMerchants } = useMerchantsPageView();
	const loc = useLoc();
	return (
		<AppPage title={loc.sMerchants}>
			<RefreshHeader
				title={loc.sMerchants}
				dataStatus={merchantsStatus}
				onRefresh={loadMerchants}
			/>
			<List>
				{merchants.map((merchant) => (
					<ListItem key={merchant.id}>
						<ListItemText primary={merchant.name} />
					</ListItem>
				))}
			</List>
		</AppPage>
	);
};

export default MerchantsPage;

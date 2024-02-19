import { List, ListItem, ListItemText } from '@mui/material';
import RefreshHeader from '../../../shared/components/RefreshHeader/RefreshHeader';
import { AppPage } from '../../../shared/pages/AppPage';
import { useMerchantsPageView } from '../MerchantsPageView';

const MerchantsPage: React.FC = () => {
	const { merchantsStatus, merchants, loadMerchants } = useMerchantsPageView();
	return (
		<AppPage title='Merchants'>
			<RefreshHeader
				title='Merchants'
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

import { useEffect } from 'react';
import { useServices } from '../../../hooks/useServices';
import { AppPage } from '../../../shared/pages/AppPage';

const MerchantsPage: React.FC = () => {
	const { merchantsService } = useServices();

	useEffect(() => {
		let cancelled = false;
		console.clear();
		merchantsService.getMerchants().then((merchants) => {
			if (cancelled) return;
			console.log(
				'Merchants:',
				merchants?.map((m) => m.id)
			);
		});

		return () => {
			cancelled = true;
		};
	}, [merchantsService]);

	return (
		<AppPage title='Merchants'>
			<h1>Merchants</h1>
		</AppPage>
	);
};

export default MerchantsPage;

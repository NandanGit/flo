import useMerchantsState from '../../redux/hooks/useMerchantsState';

export const useMerchantsPageView = () => {
	const { merchantsStatus, merchants, loadMerchants } = useMerchantsState();

	return {
		merchantsStatus,
		merchantsAreLoading: merchantsStatus === 'loading',
		merchants,
		loadMerchants,
	};
};

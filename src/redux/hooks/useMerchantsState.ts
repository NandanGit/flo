import { useCallback, useEffect } from 'react';
import { fetchMerchants } from '../slices/merchantsSlice';
import { useAppDispatch, useAppSelector } from './customReduxHooks';

const useMerchantsState = () => {
	const dispatch = useAppDispatch();
	const merchantsStatus = useAppSelector((state) => state.merchants.status);
	const merchants = useAppSelector((state) => state.merchants.merchants);

	const loadMerchants = useCallback(() => {
		console.debug('Loading merchants...');
		dispatch(fetchMerchants());
	}, [dispatch]);

	useEffect(() => {
		if (merchantsStatus === 'idle') {
			loadMerchants();
		}
	}, [merchantsStatus, dispatch, loadMerchants]);

	return {
		loadMerchants,
		merchantsStatus,
		merchants,
	};
};

export default useMerchantsState;

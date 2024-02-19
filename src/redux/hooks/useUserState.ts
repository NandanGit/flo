import { useCallback, useEffect } from 'react';
import { fetchUserProfile } from '../slices/userSlice';
import { useAppDispatch, useAppSelector } from './customReduxHooks';

const useUserState = () => {
	const dispatch = useAppDispatch();
	const userStatus = useAppSelector((state) => state.user.status);
	const userProfile = useAppSelector((state) => state.user.profile);

	const loadUserProfile = useCallback(() => {
		console.debug('Loading user profile');
		dispatch(fetchUserProfile());
		return () => {
			console.debug('Cleaning up user profile');
		};
	}, [dispatch]);

	useEffect(() => {
		if (userStatus === 'idle') {
			loadUserProfile();
		}
	}, [userStatus, dispatch, loadUserProfile]);

	return {
		loadUserProfile,
		userStatus,
		userProfile,
	};
};

export default useUserState;

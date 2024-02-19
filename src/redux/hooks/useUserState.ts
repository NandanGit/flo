import { fetchUserProfile } from '../slices/userSlice';
import { useAppDispatch, useAppSelector } from './customReduxHooks';

const useUserState = () => {
	const dispatch = useAppDispatch();
	const userStatus = useAppSelector((state) => state.user.status);
	const userProfile = useAppSelector((state) => state.user.profile);

	const loadUserProfile = () => {
		dispatch(fetchUserProfile());
	};

	return {
		loadUserProfile,
		userStatus,
		userProfile,
	};
};

export default useUserState;

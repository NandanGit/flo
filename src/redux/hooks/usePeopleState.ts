import { useCallback, useEffect } from 'react';
import { fetchPeople } from '../slices/peopleSlice';
import { useAppDispatch, useAppSelector } from './customReduxHooks';

const usePeopleState = () => {
	const dispatch = useAppDispatch();
	const peopleStatus = useAppSelector((state) => state.people.status);
	const people = useAppSelector((state) => state.people.people);

	const loadPeople = useCallback(() => {
		console.debug('Loading people...');
		dispatch(fetchPeople());
	}, [dispatch]);

	useEffect(() => {
		if (peopleStatus === 'idle') {
			loadPeople();
		}
	}, [peopleStatus, dispatch, loadPeople]);

	return {
		loadPeople,
		peopleStatus,
		people,
	};
};

export default usePeopleState;

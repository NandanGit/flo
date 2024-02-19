import usePeopleState from '../../redux/hooks/usePeopleState';

export const usePeoplePageView = () => {
	const { peopleStatus, people, loadPeople } = usePeopleState();

	return {
		peopleStatus,
		peopleAreLoading: peopleStatus === 'loading',
		people,
		loadPeople,
	};
};

import { useEffect } from 'react';
import { AppPage } from '../../../../shared/pages/AppPage';
import { useServices } from '../../../../hooks/useServices';

const ProfilePage: React.FC = () => {
	const { userService } = useServices();

	useEffect(() => {
		let cancelled = false;
		// console.clear();
		userService.getProfile().then((profile) => {
			if (cancelled) return;
			console.log('Profile:', profile);
		});

		return () => {
			cancelled = true;
		};
	}, [userService]);
	return (
		<AppPage title='Profile'>
			<h1>Profile</h1>
		</AppPage>
	);
};

export default ProfilePage;

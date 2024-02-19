import useUserState from '../../../../redux/hooks/useUserState';
import { AppPage } from '../../../../shared/pages/AppPage';

const ProfilePage: React.FC = () => {
	const { userProfile, userStatus } = useUserState();

	return (
		<AppPage title='Profile'>
			<h1>Profile</h1>
			{userStatus === 'loading' && <p>Loading...</p>}
			{userStatus === 'failed' && <p>Failed to load profile</p>}
			{userStatus === 'succeeded' && (
				<>
					<p>
						<strong>Username:</strong> {userProfile?.name}
					</p>
					<p>
						<strong>Email:</strong> {userProfile?.email}
					</p>
				</>
			)}
		</AppPage>
	);
};

export default ProfilePage;

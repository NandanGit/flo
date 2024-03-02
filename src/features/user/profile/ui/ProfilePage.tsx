import useLoc from '../../../../hooks/useLoc';
import useUserState from '../../../../redux/hooks/useUserState';
import { AppPage } from '../../../../shared/pages/AppPage';

const ProfilePage: React.FC = () => {
	const { userProfile, userStatus } = useUserState();

	const loc = useLoc();

	return (
		<AppPage title={loc.sProfile} useStaticGlassBackground>
			<h1>{loc.sProfile}</h1>
			{userStatus === 'loading' && <p>{loc.sLoading(loc.sProfile)}</p>}
			{userStatus === 'failed' && <p>{loc.sFailedToLoad(loc.sProfile)}</p>}
			{userStatus === 'succeeded' && (
				<>
					<p>
						<strong>{loc.sUsername}:</strong> {userProfile?.name}
					</p>
					<p>
						<strong>{loc.sEmail}:</strong> {userProfile?.email}
					</p>
				</>
			)}
		</AppPage>
	);
};

export default ProfilePage;

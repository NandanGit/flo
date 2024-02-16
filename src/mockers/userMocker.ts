import { useEffect, useState } from 'react';
import { User } from '../shared/schemas/userSchema';
import UserRepository from '../features/user/data/UserRepository';

const userRepo = new UserRepository();

export const useUserMocker = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const { getUser, cancelAllRequests } = userRepo.user;
		getUser().then(setUser);

		return () => {
			cancelAllRequests();
		};
	}, []);

	return user;
};

import { useEffect, useState } from 'react';
import userSchema, { User } from '../shared/schemas/userSchema';
import { APIConstants } from '../shared/constants/APIConstants';
import { cancelTokenSource, flo } from '../shared/services/axios';

export const useUserMocker = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const source = cancelTokenSource();

		flo
			.get(APIConstants.getUser, { cancelToken: source.token })
			.then((response) => {
				const { data } = response;
				data.createdAt = new Date(data.createdAt);
				data.updatedAt = new Date(data.updatedAt);
				const { success } = userSchema.safeParse(data);
				if (success) {
					console.log(data);
					setUser(data);
				} else {
					console.error('Error: Validation failed for user data.');
				}
			})
			.catch((error) => {
				console.log('Error:', error.message);
			});

		return () => {
			source.cancel('Request canceled without getting user data');
		};
	}, []);

	return user;
};

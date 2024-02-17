import { AxiosResponse } from 'axios';

import userSchema, { User } from '../../../shared/schemas/userSchema';
import { APIConstants } from '../../../shared/constants/APIConstants';
import { flo, cancelTokenSource } from '../../../services/axios';

export class UserRepository {
	private userData: User | null = null;

	public get user() {
		const source = cancelTokenSource();
		const _getUser = async (forceApiCall = false) => {
			if (this.userData && !forceApiCall) {
				return this.userData;
			}

			try {
				const response: AxiosResponse<User> = await flo.get(APIConstants.user, {
					cancelToken: source.token,
				});
				const { data } = response;

				// Convert date strings to date objects
				data.createdAt = new Date(data.createdAt);
				data.updatedAt = new Date(data.updatedAt);

				// Validate the user data
				userSchema.parse(data); // Throws an error if validation fails

				this.userData = data;
				console.log('Fetched User:', this.userData);
				return this.userData;
			} catch (error) {
				console.error('Error:', (error as Error).message);
				return null;
			}
		};
		return {
			getUser: () => _getUser(false),
			getUserForce: () => _getUser(true),
			cancelAllRequests: () => {
				source.cancel('Request canceled without getting user data');
			},
		};
	}
}

export default UserRepository;

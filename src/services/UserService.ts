import { APIConstants } from '../shared/constants/APIConstants';
import userSchema, { User } from '../shared/schemas/userSchema';
import { ApiService } from './ApiService';

export class UserService extends ApiService<typeof userSchema, User> {
	constructor() {
		super(
			APIConstants.user,
			userSchema,
			{
				start: 0,
				limit: 0,
			},
			(data) => ({
				...data,
				// createdAt: new Date(data.createdAt as string),
				// updatedAt: new Date(data.updatedAt as string),
			})
		);
	}

	getProfile = async () => {
		return (await super.get(undefined, undefined, false)) as User | null;
	};
}

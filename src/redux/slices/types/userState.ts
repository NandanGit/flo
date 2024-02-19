import { User } from '../../../shared/schemas/userSchema';
import { ReduxState } from './common';

export type UserState = ReduxState<{
	profile: User | null;
}>;

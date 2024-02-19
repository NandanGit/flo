import { Person } from '../../../shared/schemas/personSchema';
import { ReduxState } from './common';

export type PeopleState = ReduxState<{
	people: Person[];
}>;

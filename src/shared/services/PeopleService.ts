// PeopleService class should extend ApiService class

import { APIConstants } from '../constants/APIConstants';
import personSchema, { Person } from '../schemas/personSchema';
import { ApiService } from './ApiService';

export class PeopleService extends ApiService<typeof personSchema, Person> {
	constructor() {
		super(
			APIConstants.people,
			personSchema,
			APIConstants.defaultPeoplePaginationOptions
		);
	}

	getPersonById = super.getById;

	getPeople = super.get;

	search = super.search;
}

// PeopleService class should extend ApiService class

import { APIConstants } from '../constants/APIConstants';
import personSchema, { Person } from '../schemas/personSchema';
import { APIResponse } from '../types/api';
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

	addPerson = async (person: Person) => super.add<APIResponse<Person>>(person);

	// // TODO: Implement this in the backend
	// addPeople = async (people: Person[]) =>
	// 	super.addMany<APIResponse<Person[]>>(people);

	updatePerson = async (id: string, person: Partial<Person>) =>
		super.update<APIResponse<Person>>(id, person);

	// // TODO: Implement this in the backend
	// addOrUpdatePerson = async (person: Person) =>
	// 	this.addOrUpdate(person.id, person);

	removePerson = async (id: string) => super.remove<APIResponse<Person>>(id);
}

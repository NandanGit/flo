/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const faker = require('faker');

const generateFakeUser = () => ({
	id: faker.datatype.uuid(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	phone: faker.phone.phoneNumber('8#########'),
	preferredCurrency: 'INR',
	avatar:
		'https://media.istockphoto.com/id/108177208/photo/girls.jpg?s=612x612&w=0&k=20&c=91jZtoUXwpgiiYwbqr7ceOvuE3eDeQJEc5-4npQwDtE=',
	createdAt: faker.date.past().getTime(),
	updatedAt: faker.date.recent().getTime(),
});

module.exports = {
	generateFakeUser,
};

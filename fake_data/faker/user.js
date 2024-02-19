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
		'https://www.researchgate.net/publication/324536193/figure/fig2/AS:615902089338880@1523853909708/The-4-SR-results-compared-with-all-the-competing-methods.png',
	createdAt: faker.date.past().getTime(),
	updatedAt: faker.date.recent().getTime(),
});

module.exports = {
	generateFakeUser,
};

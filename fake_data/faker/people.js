/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const faker = require('faker');

const generateFakePerson = () => ({
	id: faker.datatype.uuid(),
	name: faker.name.findName(),
	avatar: Math.random() < 0.5 ? faker.image.avatar() : undefined,
});

module.exports = {
	generateFakePerson,
};

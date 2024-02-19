/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const faker = require('faker');

const generateFakeMerchant = () => ({
	id: faker.datatype.uuid(),
	name: faker.company.companyName(),
	website: Math.random() < 0.6 ? faker.internet.url() : undefined,
	logo: Math.random() < 0.7 ? faker.image.avatar() : undefined,
	description:
		Math.random() < 0.8 ? faker.company.catchPhraseDescriptor() : undefined,
	category: faker.random.arrayElement([
		'food',
		'clothing',
		'electronics',
		'grocery',
		'health',
		'beauty',
		'travel',
		'entertainment',
		'other',
	]),
});

module.exports = {
	generateFakeMerchant,
};

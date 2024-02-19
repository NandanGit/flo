/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const faker = require('faker');
const AppConstants = require('../AppConstants');
// const fs = require('fs');
// const path = require('path');
const { gaussianRandom } = require('../utils/random');

const generateFakeTransaction = (personIds, merchantIds) => {
	const transactionType = faker.random.arrayElement(
		AppConstants.transactionTypes
	); // "expense" or "income"
	const recipientType = faker.random.arrayElement(
		AppConstants.transactionRecipientTypes
	); // "merchant" or "peer" or "other"
	let to, from;
	if (transactionType === 'expense') {
		from =
			recipientType === 'merchant'
				? faker.random.arrayElement(merchantIds)
				: recipientType === 'peer'
				? faker.random.arrayElement(personIds)
				: faker.datatype.uuid();
		to = 'self';
	} else {
		to =
			recipientType === 'merchant'
				? faker.random.arrayElement(merchantIds)
				: recipientType === 'peer'
				? faker.random.arrayElement(personIds)
				: faker.datatype.uuid();
		from = 'self';
	}

	const fakeTransaction = {
		id: faker.datatype.uuid(),
		title: faker.commerce.productName(),
		description: faker.finance.transactionDescription(),
		amount: parseFloat(faker.finance.amount()),
		currency: 'INR',
		type: transactionType,
		recipientType: recipientType,
		status: faker.random.arrayElement(AppConstants.transactionStatuses),
		mode: faker.random.arrayElement(AppConstants.transactionModes),
		categories: faker.random.arrayElements(
			AppConstants.transactionCategories,
			gaussianRandom(1, 5)
		),
		timestamp: faker.date.past().getTime(),
		from: from,
		to: to,
	};
	return fakeTransaction;
};

// const fakeTransactions = Array.from({ length: 20 }, generateFakeTransaction);

// const transactionsPath = path.join(__dirname, 'generated/transactions.json');

// fs.writeFileSync(transactionsPath, JSON.stringify(fakeTransactions, null, 2));
// console.log('Fake transactions generated successfully');

module.exports = {
	generateFakeTransaction,
};

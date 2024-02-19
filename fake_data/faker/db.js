/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { generateFakeTransaction } = require('./transactions');
const { generateFakePerson } = require('./people');
const { generateFakeMerchant } = require('./merchants');
const { generateFakeUser } = require('./user');

const createFakeDB = ({
	transactionsCount = 20,
	peopleCount = 10,
	merchantsCount = 10,
}) => {
	const people = Array.from({ length: peopleCount }, generateFakePerson);

	const merchants = Array.from(
		{ length: merchantsCount },
		generateFakeMerchant
	);

	const transactions = Array.from({ length: transactionsCount }, () =>
		generateFakeTransaction(
			people.map((p) => p.id),
			merchants.map((m) => m.id)
		)
	);
	// console.log('Fake transactions:', transactions);

	const user = generateFakeUser();

	return {
		people,
		merchants,
		transactions,
		user,
	};
};

const generateFakeDB = () => {
	const fakeDB = createFakeDB({
		transactionsCount: 250,
		peopleCount: 25,
		merchantsCount: 20,
	});

	const dbPath = path.join(__dirname, 'generated/db.json');
	fs.writeFileSync(dbPath, JSON.stringify(fakeDB, null, 2));
};

generateFakeDB();

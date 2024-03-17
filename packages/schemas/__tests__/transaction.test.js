/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// import { s2cTransactionSchemaRaw } from '../dist';
// import { FloConstants } from '@flo.app/constants';
const { s2cTransactionSchemaRaw } = require('../dist');
const { FloConstants } = require('@flo.app/constants');
// import { describe, it, expect } from 'jest';

const TR = FloConstants.schema.transaction;

describe('s2cTransactionSchemaRaw', () => {
	it('should validate a valid transaction', () => {
		const validTransaction = {
			id: 'T-1710698125-3B824EB875A9',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			title: 'Test Transaction',
			description: 'Test Description',
			amount: 100,
			type: TR.TYPES[0], // INCOME
			status: TR.STATUSES[0], // PENDING
			mode: TR.MODES[0], // CASH
			categoryId: 'C-1710698125-0410',
			fromId: 'A-1710698231-7F1B',
			toId: 'M-1710698231-F4DC1740',
			startDate: new Date().toISOString(),
			// split: {
			// 	splits: [
			// 		{
			// 			personId: '123',
			// 			amount: 50,
			// 			debtStatus: TR.split.DEBT_STATUSES[0],
			// 		},
			// 	],
			// },
			// children: ['123'],
			merchant: {
				benefits: [
					{
						type: TR.merchant.benefits.TYPES[0], // CASHBACK
						amount: 10,
					},
				],
				breakup: {
					list: [
						{
							name: 'Test',
							quantity: 1,
							unit: TR.merchant.breakup.list.unit.TYPES[0], // Kg
							amountPerUnit: 10,
							discount: 0,
						},
					],
					additionalCharges: [
						{
							type: TR.merchant.breakup.additionalCharges.TYPES[0], // GST
							name: 'Test Charge',
							amount: 10,
						},
					],
				},
			},
			// spentFor: {
			// 	personId: '123',
			// 	additionalPeople: ['123'],
			// },
			recurring: {
				frequency: TR.recurring.FREQUENCIES[0], // DAILY
				// every: 1,
			},
		};

		const result = s2cTransactionSchemaRaw.safeParse(validTransaction);

		if (!result.success) {
			console.info(JSON.stringify(result.error, null, 2));
		}
		expect(result.success).toBe(true);

		// Print the result if it fails
	});

	it("shouldn't validate an invalid transaction", () => {
		const invalidTransaction = {
			id: 'T-1710698125-3B824EB875A9',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			title: 'Test Transaction',
			description: 'Test Description',
			amount: 100,
			type: TR.TYPES[0], // INCOME
			status: TR.STATUSES[0], // PENDING
			mode: TR.MODES[0], // CASH
			categoryId: 'C-1710698125-0410',
			fromId: 'A-1710698231-7F1B',
			toId: 'M-1710698231-F4DC1740',
			startDate: new Date().toISOString(),
			// split: {
			// 	splits: [
			// 		{
			// 			personId: '123',
			// 			amount: 50,
			// 			debtStatus: TR.split.DEBT_STATUSES[0],
			// 		},
			// 	],
			// },
			// children: ['123'],
			merchant: {
				benefits: [
					{
						type: TR.merchant.benefits.TYPES[0], // CASHBACK
						amount: 10,
					},
				],
				breakup: {
					list: [
						{
							name: 'Test',
							quantity: 1,
							unit: TR.merchant.breakup.list.unit.TYPES[0], // Kg
							amountPerUnit: 10,
							discount: 0,
						},
					],
					additionalCharges: [
						{
							type: TR.merchant.breakup.additionalCharges.TYPES[0], // GST
							name: 'Test Charge',
							amount: 10,
						},
					],
				},
			},
			// spentFor: {
			// 	personId: '123',
			// 	additionalPeople: ['123'],
			// },
			recurring: {
				frequency: TR.recurring.FREQUENCIES[4], // DAILY
				// every: 1,
			},
		};

		const result = s2cTransactionSchemaRaw.safeParse(invalidTransaction);

		// if (!result.success) {
		// 	console.info(JSON.stringify(result.error, null, 2));
		// }
		expect(result.success).toBe(false);
	});

	describe('Transactions', () => {
		const transactions = [
			{
				id: 'T-1710696125-3B8656B875A9',
				// created 4 hrs ago
				createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
				title: 'Burger',
				description: 'McDonalds',
				amount: 459,
				type: 'EXPENSE',
				status: 'COMPLETED',
				mode: 'UPI',
				categoryId: 'C-1710698125-0410',
				fromId: 'A-1710698231-7F1B',
				toId: 'M-1710698231-F4DC1740',
				startDate: new Date().toISOString(),
				split: {
					splits: [
						{
							personId: 'P-1710698231-7F1B',
							amount: 200,
							debtStatus: 'PENDING',
						},
						{
							personId: 'SELF',
							amount: 259,
							debtStatus: 'SETTLED',
						},
					],
				},
				merchant: {
					benefits: [
						{
							type: 'CASHBACK',
							amount: 50,
						},
					],
					breakup: {
						list: [
							{
								name: 'Burger Combo',
								quantity: 1,
								unit: 'unit',
								amountPerUnit: 309,
							},
							{
								name: 'Fries',
								quantity: 1,
								unit: 'unit',
								amountPerUnit: 129,
							},
						],
						additionalCharges: [
							{
								type: 'GST',
								amount: 21,
							},
						],
					},
				},
				spentFor: {
					personId: 'P-1710698231-7F1B',
					additionalPeople: ['P-1710698231-7F1B'],
				},

				recurring: {
					frequency: 'EVERY',
					every: 5,
				},
			},
			{
				id: 'T-1710698125-3B824EB875A9',
				createdAt: new Date().toISOString(),
				title: 'Uber Ride',
				description: 'To Home',
				amount: 344,
				type: 'EXPENSE',
				status: 'COMPLETED',
				mode: 'UPI',
				categoryId: 'C-1710698125-0410',
				fromId: 'A-1710698231-7F1B',
				toId: 'M-1710698231-F4DC1740',
				startDate: new Date().toISOString(),
			},
		];

		transactions.forEach((transaction, ind) => {
			it(`Transaction ${ind + 1}`, () => {
				const result = s2cTransactionSchemaRaw.safeParse(transaction);
				if (!result.success) {
					console.info(
						`Transaction ${ind + 1}:`,
						JSON.stringify(result.error, null, 2)
					);
				}
				expect(result.success).toBe(true);
			});
		});
	});
});

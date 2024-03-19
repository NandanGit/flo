/* eslint-disable no-mixed-spaces-and-tabs */
import { z } from 'zod';
import { zodDateSchema } from '../shared/zodDate';
import {
	accountIdSchema,
	paymentProcessorIdSchema,
	userIdSchema,
} from '../shared/zodId';
import { FloConstants } from '@flo.app/constants';
import { zodStringSchema } from '../shared/zodString';
import { zodEnumSchema } from '../shared/zodEnum';
import { zodNumberSchema } from '../shared/zodNumber';

const AC = FloConstants.schema.account;

const s2cAccountSchemaRaw = z.object({
	id: accountIdSchema,
	createdBy: userIdSchema,
	createdAt: zodDateSchema(),
	updatedAt: zodDateSchema().optional(),

	// Business Fields
	title: zodStringSchema({
		fieldName: 'Account title',
		minLength: AC.title.MIN_LENGTH,
		maxLength: AC.title.MAX_LENGTH,
	}),

	description: zodStringSchema({
		fieldName: 'Account description',
		maxLength: AC.description.MAX_LENGTH,
	}).optional(),

	type: zodEnumSchema(AC.TYPES, {
		fieldName: 'Account type',
	}),

	// Initial Balance can be negative for only credit cards and wallets.
	initialBalance: zodNumberSchema({
		fieldName: 'Initial account balance',
		min: -AC.initialBalance.MAX,
		max: AC.initialBalance.MAX,
	}),

	currency: zodEnumSchema(AC.CURRENCIES, {
		fieldName: 'Account currency',
	}),

	// Mandatory for "SAVINGS", "CREDIT_CARD", "WALLET", "SALARY", "CURRENT"
	defaultPaymentProcessor: paymentProcessorIdSchema.optional(),

	color: zodEnumSchema(AC.COLORS, {
		fieldName: 'Account color',
	}),

	// // Account Status
	// status: z.enum(AC.STATUSES, {
	// 	invalid_type_error: AC.errors.status,
	// }), // Not sure about this yet
});

export default s2cAccountSchemaRaw;

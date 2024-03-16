/* eslint-disable no-mixed-spaces-and-tabs */
import { z } from 'zod';
import { zodDateSchema } from '../shared/zodDate';
import { accountIdSchema, userIdSchema } from '../shared/zodId';
import { FloConstants } from '@flo.app/constants';

const AC = FloConstants.schema.account;

const s2cAccountSchemaRaw = z.object({
	id: accountIdSchema,
	ownerId: userIdSchema,
	createdAt: zodDateSchema(),
	updatedAt: zodDateSchema().optional(),

	// Business Fields
	title: z
		.string()
		.min(AC.title.MIN_LENGTH, {
			message: AC.errors.title.MIN_LENGTH,
		})
		.max(AC.title.MAX_LENGTH, {
			message: AC.errors.title.MAX_LENGTH,
		}),
	description: z
		.string()
		.max(AC.description.MAX_LENGTH, {
			message: AC.errors.description.MAX_LENGTH,
		})
		.optional(),
	type: z.enum(AC.TYPES, {
		invalid_type_error: AC.errors.TYPE,
	}),

	// Initial Balance can be negative for only credit cards and wallets.
	initialBalance: z
		.number()
		.min(-AC.initialBalance.MAX, { message: AC.errors.initialBalance.MIN })
		.max(AC.initialBalance.MAX, { message: AC.errors.initialBalance.MAX }),

	currency: z.enum(AC.CURRENCIES, {
		invalid_type_error: AC.errors.CURRENCY,
	}),

	color: z.enum(AC.COLORS, {
		invalid_type_error: AC.errors.COLOR,
	}),

	// // Account Status
	// status: z.enum(AC.STATUSES, {
	// 	invalid_type_error: AC.errors.status,
	// }), // Not sure about this yet
});

export default s2cAccountSchemaRaw;

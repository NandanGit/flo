import { z } from 'zod';
import {
	categoryIdSchema,
	merchantIdSchema,
	productIdSchema,
	userIdSchema,
} from '../shared/zodId';
import { zodStringSchema } from '../shared/zodString';
import { zodNumberSchema } from '../shared/zodNumber';
import { FloConstants } from '@flo.app/constants';
import { zodEnumSchema } from '../shared/zodEnum';

const PD = FloConstants.schema.product;

const s2cProductSchemaRaw = z.object({
	id: productIdSchema,
	createdBy: userIdSchema,

	title: zodStringSchema({
		fieldName: 'Product title',
		minLength: PD.title.MIN_LENGTH,
		maxLength: PD.title.MAX_LENGTH,
	}),

	categoryId: categoryIdSchema,

	icon: zodEnumSchema(PD.ICONS, {
		fieldName: 'Product icon',
	}).optional(),

	description: zodStringSchema({
		fieldName: 'Product description',
		maxLength: PD.description.MAX_LENGTH,
	}).optional(),

	tentativeAmounts: z
		.array(
			zodNumberSchema({
				fieldName: 'Product tentative amount',
				min: PD.tentativeAmount.MIN,
				max: PD.tentativeAmount.MAX,
			})
		)
		.optional(),

	// This is used to show suggestions to the user when they are creating a transaction. If this product is added, the we can show these merchants as suggestions near merchants.
	tentativeMerchantIds: z.array(merchantIdSchema).optional(),
});

export default s2cProductSchemaRaw;

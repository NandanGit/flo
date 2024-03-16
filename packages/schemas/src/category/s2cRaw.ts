import { z } from 'zod';
import { zodDateSchema } from '../shared/zodDate';
import { categoryIdSchema, userIdSchema } from '../shared/zodId';
import { FloConstants } from '@flo.app/constants';

const CT = FloConstants.schema.category;
const AC = FloConstants.schema.account;

const s2cCategorySchemaRaw = z.object({
	id: categoryIdSchema,
	ownerId: userIdSchema,

	title: z
		.string()
		.min(CT.title.MIN_LENGTH, {
			message: CT.errors.title.MIN_LENGTH,
		})
		.max(CT.title.MAX_LENGTH, {
			message: CT.errors.title.MAX_LENGTH,
		}),

	type: z.enum(CT.TYPES, {
		invalid_type_error: CT.errors.TYPE,
	}),

	icon: z.enum(CT.ICONS, {
		invalid_type_error: CT.errors.ICON,
	}),

	color: z.enum(CT.COLORS, {
		invalid_type_error: CT.errors.COLOR,
	}),
});

export default s2cCategorySchemaRaw;

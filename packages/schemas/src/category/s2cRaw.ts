import { z } from 'zod';
import { categoryIdSchema, userIdSchema } from '../shared/zodId';
import { FloConstants } from '@flo.app/constants';
import { zodStringSchema } from '../shared/zodString';
import { zodEnumSchema } from '../shared/zodEnum';

const CT = FloConstants.schema.category;

const s2cCategorySchemaRaw = z.object({
	id: categoryIdSchema,
	createdBy: userIdSchema,

	title: zodStringSchema({
		fieldName: 'Category title',
		minLength: CT.title.MIN_LENGTH,
		maxLength: CT.title.MAX_LENGTH,
	}),

	type: zodEnumSchema(CT.TYPES, {
		fieldName: 'Category type',
	}),

	icon: zodEnumSchema(CT.ICONS, {
		fieldName: 'Category icon',
	}),

	color: zodEnumSchema(CT.COLORS, {
		fieldName: 'Category color',
	}),
});

export default s2cCategorySchemaRaw;

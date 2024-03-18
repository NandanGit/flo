import { z } from 'zod';
import { paymentProcessorIdSchema, userIdSchema } from '../shared/zodId';
import { zodStringSchema } from '../shared/zodString';
import { FloConstants } from '@flo.app/constants';
import { zodEnumSchema } from '../shared/zodEnum';

const PP = FloConstants.schema.paymentProcessor;
const s2cPaymentProcessorSchemaRaw = z.object({
	id: paymentProcessorIdSchema,
	createdBy: userIdSchema,
	title: zodStringSchema({
		fieldName: 'Payment Processor title',
		minLength: PP.title.MIN_LENGTH,
		maxLength: PP.title.MAX_LENGTH,
	}),
	supportedModes: z
		.array(
			zodEnumSchema(PP.SUPPORTED_MODES, {
				fieldName: 'Supported payment mode',
			})
		)
		.refine(
			(data) => {
				return data.length > 0;
			},
			{
				message: PP.errors.MIN_ONE_SUPPORTED_MODE,
			}
		),
	icon: zodEnumSchema(PP.ICONS, {
		fieldName: 'Payment Processor icon',
	}),
});

export default s2cPaymentProcessorSchemaRaw;

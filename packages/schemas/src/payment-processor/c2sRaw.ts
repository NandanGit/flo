import s2cPaymentProcessorSchemaRaw from './s2cRaw';

const c2sPaymentProcessorSchemaRaw = s2cPaymentProcessorSchemaRaw.omit({
	id: true,
	createdBy: true,
	createdAt: true,
	updatedAt: true,
});
// .refine((data) => {

export default c2sPaymentProcessorSchemaRaw;

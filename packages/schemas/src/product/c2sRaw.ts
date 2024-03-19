import s2cProductSchemaRaw from './s2cRaw';

const c2sProductSchemaRaw = s2cProductSchemaRaw.omit({
	id: true,
});
// .refine((data) => {

export default c2sProductSchemaRaw;

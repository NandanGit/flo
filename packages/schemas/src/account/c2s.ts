import c2sAccountSchemaRaw from './c2sRaw';

const c2sAccountSchema = c2sAccountSchemaRaw.transform((data) => {
	// If you want to transform any date from ISO string Date, you can do it here
	return data;
});

export default c2sAccountSchema;

import s2cAccountSchemaRaw from './s2cRaw';

const s2cAccountSchema = s2cAccountSchemaRaw.transform((data) => {
	return data; // No transformation needed yet
});

export default s2cAccountSchema;

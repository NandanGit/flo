import { FloConstants } from '@flo.app/constants';
import s2cAccountSchemaRaw from './s2cRaw';

const AC = FloConstants.schema.account;
const c2sAccountSchemaRaw = s2cAccountSchemaRaw
	.omit({
		id: true,
		ownerId: true,
		createdAt: true,
		updatedAt: true,
	})
	.refine(
		(data) => {
			if (['CREDIT_CARD', 'WALLET', 'OTHERS'].includes(data.type)) {
				return true; // Any initial balance is allowed for these types
			}
			return data.initialBalance >= 0; // Initial balance can't be negative for other types
		},
		{
			message: AC.errors.initialBalance.INVALID_FOR_ACCOUNT_TYPE,
		}
	);
// .transform((data) => { // Use this if you want to transform the dates
//   return {
//     ...data,
//   };
// });

export default c2sAccountSchemaRaw;

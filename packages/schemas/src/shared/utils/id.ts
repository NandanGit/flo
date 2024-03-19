import { EntityIdPrefix, EntityType } from '../enums/entity';
import { resolveEntityTypeFromId } from './entity';

// export const resolveZodId = (id: string) => {
// 	// The string above will be a valid zod id. We have to resolve it based on the prefix
// 	const prefix = id.split('-')[0];
// 	switch (prefix) {
// 		case EntityIdPrefix.account:
// 			return 'ACCOUNT';
// 		case EntityIdPrefix.merchant:
// 			return 'MERCHANT';
// 		case EntityIdPrefix.person:
// 			return 'PERSON';
// 		case EntityIdPrefix.transaction:
// 			return 'TRANSACTION';
// 		case EntityIdPrefix.user:
// 			return 'USER';
// 		case EntityIdPrefix.category:
// 			return 'CATEGORY';
// 		default:
// 			return 'UNKNOWN';
// 	}
// };

export const resolveAccountType = (id: string) => {
	return resolveEntityTypeFromId(id) as
		| EntityType.account
		| EntityType.merchant
		| EntityType.person
		| EntityType.unknown;
};

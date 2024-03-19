import { EntityType } from '../enums/entity';
import { resolveEntityTypeFromId } from './entity';

export const resolveAccountType = (id: string) => {
	return resolveEntityTypeFromId(id) as
		| EntityType.account
		| EntityType.merchant
		| EntityType.person
		| EntityType.unknown;
};

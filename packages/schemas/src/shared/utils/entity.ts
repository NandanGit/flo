import { EntityIdPrefix, EntityType } from '../enums/entity';

export const resolveEntityTypeFromId = (id: string): EntityType | null => {
	const prefix = id.split('-')[0];
	switch (prefix) {
		case EntityIdPrefix.account:
			return EntityType.account;
		case EntityIdPrefix.merchant:
			return EntityType.merchant;
		case EntityIdPrefix.person:
			return EntityType.person;
		case EntityIdPrefix.transaction:
			return EntityType.transaction;
		case EntityIdPrefix.user:
			return EntityType.user;
		case EntityIdPrefix.category:
			return EntityType.category;
		case EntityIdPrefix.paymentProcessor:
			return EntityType.paymentProcessor;
		default:
			return null;
	}
};

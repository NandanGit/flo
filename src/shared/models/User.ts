import { Currency } from '../enums/Currency';

export interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	currency: Currency;
	avatar: string;
	createdAt: Date;
	updatedAt: Date;
}

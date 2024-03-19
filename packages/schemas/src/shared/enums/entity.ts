export enum EntityType {
	user = 'USER',
	account = 'ACCOUNT',
	person = 'PERSON',
	merchant = 'MERCHANT',
	transaction = 'TRANSACTION',
	category = 'CATEGORY',
	product = 'PRODUCT',
	paymentProcessor = 'PAYMENT_PROCESSOR',

	unknown = 'UNKNOWN',
}

export enum EntityIdPrefix {
	user = 'US',
	account = 'AC',
	person = 'PR',
	merchant = 'MR',
	transaction = 'TR',
	category = 'CA',
	product = 'PD',
	paymentProcessor = 'PP',
}

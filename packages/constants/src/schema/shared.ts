export class SharedSchemaConstants {
	public static readonly CURRENCIES = [
		'INR',
		'USD',
		'EUR',
		'GBP',
		'JPY',
		'AUD',
		'CAD',
	] as const;

	public static readonly COLORS = [
		// 8 simple non intrusive colors
		'PURPLE', // #9370DB,
		'SEA_GREEN', // #3CB371,
		'TURQUOISE', // #48D1CC,
		'GOLD', // #FFAF1A,
		'TOMATO', // #FF6347,
		'PISTACHIO', // #93C572,
		'PINK', // #FF9999,
		'HOT_PINK', // #FF69B4,
		// 'VIOLET_RED', // #C71585,
	] as const;
}

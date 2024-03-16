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
		'PURPLE', // #9370DB,
		'TOMATO', // #FF6347,
		// Green
		'PISTACHIO', // #93C572,
		'SEA_GREEN', // #3CB371,
		// Blue
		'TURQUOISE', // #48D1CC,
		// Pink
		'PINK', // #FF9999,
		'HOT_PINK', // #FF69B4,
		'PALE_VIOLET_RED', // #DB7093,
		// Yellow
		'GOLD', // #FFDB58,
		// Others
		// 'VIOLET_RED', // #C71585,
		'SKY_BLUE', // #87CEEB
		'CORAL', // #FF7F50
		// 'Lavender', // #E6E6FA
		'PEACH', // #FFDAB9
		// 'Teal', // #008080
		'ROSE_GOLD', // #B76E79
		// 'Terracotta', // #E2725B
		// 'Olive Green', // #808000
		'LILAC', // #C8A2C8
	] as const;
}

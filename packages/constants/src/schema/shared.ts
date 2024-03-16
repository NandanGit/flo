export class SharedSchemaConstants {
	public static readonly TRANSACTION_TYPES = [
		'INCOME',
		'EXPENSE',
		'TRANSFER',
	] as const;

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
		'MAUVE', // #9370DB,
		'CRIMSON', // #FF6347,
		// Green
		'EMERALD', // #93C572,
		'JADE', // #3CB371,
		// Blue
		'AQUA', // #48D1CC,
		// Pink
		'BLUSH', // #FF9999,
		'FUCHSIA', // #FF69B4,
		'MAROON', // #DB7093,
		// Yellow
		'GOLD', // #FFDB58,
		// Others
		// 'VIOLET_RED', // #C71585,
		'AZURE', // #87CEEB
		'CORAL', // #FF7F50
		// 'Lavender', // #E6E6FA
		'APRICOT', // #FFDAB9
		// 'Teal', // #008080
		'ROSE_GOLD', // #B76E79
		// 'Terracotta', // #E2725B
		// 'Olive Green', // #808000
		'LILAC', // #C8A2C8
		// Muted colors
		'PLATINUM', // #D3D3D3
		'SAPPHIRE', // #ADD8E6
		'GOLDENROD', // #FFFFE0
		'BLUSH_ROSE', // #FFB6C1
		'CHAMPAGNE', // #FFDAB9
		'COTTON_CANDY', // #FFC0CB
		'LAVENDER_MIST', // #E6E6FA
		'PALE_TURQUOISE', // #AFEEEE
		'AMETHYST', // #C8A2C8
		'CORAL_PINK', // #F08080
		'SILVER', // #C0C0C0
		'BRONZE', // #CD7F32
		'SKY_BLUE', // #87CEEB
	] as const;
}

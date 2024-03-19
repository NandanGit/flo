import { FLO_ICONS } from '@flo.app/icons';

export class SharedSchemaConstants {
	public static readonly PAYMENT_MODES = [
		'CASH',
		'CARD',
		'UPI',
		'NET_BANKING',
		'WALLET',
		'OTHERS',
	] as const;

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

	public static readonly COLOR_MAP = {
		ROSE_GOLD: '#B76E79',
		LILAC: '#C8A2C8',
		MAUVE: '#9370DB',
		STEEL_BLUE: '#4682B4',
		AZURE: '#87CEEB',
		AQUAMARINE: '#20B2AA',
		// AMETHYST: '#C8A2C8',
		// BLUSH: '#FF9999',
		// BLUSH_ROSE: '#FFB6C1', // **
		// CHAMPAGNE: '#FFDAB9',
		// CORAL: '#FF7F50', // *
		// CORAL_PINK: '#F08080', // **
		// COTTON_CANDY: '#FFC0CB',
		// CRIMSON: '#FF6347', *
		// FUCHSIA: '#FF69B4',
		// GOLDENROD: '#FFFFE0', // **
		// JADE: '#3CB371', // *
		// LAVENDER_MIST: '#E6E6FA',
		// MAROON: '#DB7093', // *
		// PALE_TURQUOISE: '#AFEEEE',
		// SAPPHIRE: '#ADD8E6', // **
		// SILVER: '#C0C0C0',
		// SKY_BLUE: '#87CEEB',
		// Dark colors
		// TEAL: '#008B8B', // *
		// FOREST_GREEN: '#228B22', // *
		// DARK_SLATE_GRAY: '#2F4F4F',
		// MEDIUM_SEA_GREEN: '#3CB371', // *
		SEA_GREEN: '#2E8B57',
		EMERALD: '#93C572',
		GOLD: '#FFDB58',
		BRONZE: '#CD7F32',
		APRICOT: '#FFDAB9',
		PLATINUM: '#D3D3D3',
	} as const;

	public static readonly COLORS = Object.keys(
		this.COLOR_MAP
	) as unknown as readonly [
		keyof typeof this.COLOR_MAP,
		...(keyof typeof this.COLOR_MAP)[]
	];

	public static readonly ICONS = FLO_ICONS;

	public static readonly LIMITS = {
		MAX_STRING_LENGTH: 2000, // MAX length of any string by default
		MAX_NUMBER: Number.MAX_SAFE_INTEGER,
	};
}

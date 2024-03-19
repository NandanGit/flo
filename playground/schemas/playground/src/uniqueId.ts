import * as crypto from 'crypto';

interface CustomIdOptions {
	prefix?: string;
	suffix?: string;
	separator?: string;
	/**
	 * Number of random bytes to generate. Default is 2.
	 */
	randomBytes?: number;
	/**
	 * Whether to use uppercase letters in the random component. Default is true.
	 */
	uppercase?: boolean;

	/**
	 * Whether to convert the random component to hexadecimal. Default is false.
	 */
	convertToHex?: boolean;
}

export function generateCustomId({
	prefix = 'ID',
	suffix = '',
	separator = '-',
	randomBytes = 2,
	uppercase = true,
	convertToHex = true,
}: CustomIdOptions): string {
	if (prefix.length > 4) throw new Error('Prefix too long');
	if (suffix.length > 4) throw new Error('Suffix too long');
	if (prefix.includes(separator))
		throw new Error(`Prefix should not contain separator (${separator})`);
	if (suffix.includes(separator))
		throw new Error(`Suffix should not contain separator (${separator})`);
	const timestamp = Math.floor(Date.now() / 1000); // UNIX timestamp in seconds
	let randomComponent = crypto
		.randomBytes(randomBytes)
		.toString(convertToHex ? 'hex' : 'base64');
	if (uppercase) randomComponent = randomComponent.toUpperCase();
	let customId = `${prefix}${separator}${timestamp}${separator}${randomComponent}`;
	if (suffix) customId += `${separator}${suffix}`;
	return customId; // Example: "U-1612345678-ABCD"
}

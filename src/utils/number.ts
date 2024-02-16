/**
 * function to truncate number
 * if number is greater than 1000, it will be truncated to 1k
 * if number is greater than 1000000, it will be truncated to 1m
 * if number is greater than 1000000000, it will be truncated to 1b
 * and so on
 */

export function truncateNumber(
	num: number,
	threshold = 1000,
	max = 100000
): string {
	if (num < threshold) {
		return num.toString();
	}
	if (num > max) {
		return '100k+';
	}
	const suffixes = ['', 'k', 'm', 'b', 't'];
	const suffixNum = Math.floor(('' + num).length / 3);
	const shortValue: number = parseFloat(
		(suffixNum !== 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
	);
	let shortNum = shortValue.toString();
	if (shortValue % 1 !== 0) {
		shortNum = shortValue.toFixed(1);
	}
	return shortNum + suffixes[suffixNum] + '+';
}

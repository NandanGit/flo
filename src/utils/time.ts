export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Simple date formatter that will format into 'just now', 'x minutes ago', 'x hours ago', 'x days ago', 'x months ago', 'x years ago'
 */
export const timeAgo = (date: Date) => {
	const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
	const interval = seconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + ' years ago';
	}
	if (interval > 1) {
		return Math.floor(interval) + ' months ago';
	}
	if (interval > 1) {
		return Math.floor(interval) + ' days ago';
	}
	if (interval > 1) {
		return Math.floor(interval) + ' hours ago';
	}
	if (interval > 1) {
		return Math.floor(interval) + ' minutes ago';
	}
	return 'just now';
};

/**
 * Very versatile date formatter that accepts a format string and returns the formatted date
 */

export const formatDate = (date: Date, format: string) => {
	const map: Record<string, number | string> = {
		mmm: date.toLocaleDateString(undefined, { month: 'long' }),
		mm: date.getMonth() + 1,
		m: date.toLocaleDateString(undefined, { month: 'short' }),
		ddd: date.toLocaleDateString(undefined, { weekday: 'long' }),
		dd: date.getDate(),
		d: date.toLocaleDateString(undefined, { weekday: 'short' }),
		yyyy: date.getFullYear(),
		yy: date.getFullYear().toString().slice(-2),
		hh: date.getHours(),
		MM: date.getMinutes(),
		ss: date.getSeconds(),
		a: date.getHours() >= 12 ? 'PM' : 'AM',
	};

	const regex = new RegExp(Object.keys(map).join('|'), 'gi');
	return format
		.replace(regex, (matched) => {
			const padSymbolIndex = format.lastIndexOf('|', format.indexOf(matched));
			const shouldPad =
				padSymbolIndex !== -1 && padSymbolIndex < format.indexOf(matched);
			const value = String(map[matched]);
			return shouldPad ? value.padStart(2, '0') : value;
		})
		.replace(/\|/g, '');

	// const regex = new RegExp(Object.keys(map).join('|'), 'gi');
	// return format.replace(regex, (matched) => String(map[matched]));
};

/**
 * function to truncate string to a certain length
 */
export function truncateString(str: string, length: number): string {
	return str.length > length ? `${str.substring(0, length)}...` : str;
}

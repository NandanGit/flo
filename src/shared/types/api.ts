export interface APIGetOptions {
	[key: string]: string | number | boolean;
}

export interface APIPaginationOptions {
	start?: number;
	limit?: number;
}

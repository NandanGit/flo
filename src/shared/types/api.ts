/* eslint-disable no-mixed-spaces-and-tabs */
export interface APIGetOptions {
	[key: string]: string | number | boolean;
}

export interface APIPaginationOptions {
	start?: number;
	limit?: number;
}

export type APIResponse<D, E = { message: string }> =
	| {
			success: true;
			data: D;
	  }
	| {
			success: false;
			errors: E[];
	  };

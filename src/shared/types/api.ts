/* eslint-disable no-mixed-spaces-and-tabs */
// export interface APIGetOptions {
// 	[key: string]: string | number | boolean;
// }

// APIGetOptions<T> should return a new type with all the keys in T and value as string
export type APIGetOptions<T = { [key: string]: string | number | boolean }> = {
	[K in keyof T]?: T[K] extends Date ? T[K] | string : T[K];
} & {
	q?: string;
};

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

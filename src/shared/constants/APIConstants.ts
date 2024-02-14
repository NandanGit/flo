import { APIPaginationOptions } from '../types/api';

export class APIConstants {
	public static readonly baseUrl = 'http://localhost:3001';
	public static readonly user = '/user';
	public static readonly people = '/people';
	public static readonly merchants = '/merchants';
	public static readonly transactions = '/transactions';

	// Options
	private static readonly defaultPaginationOptions: Required<APIPaginationOptions> =
		{
			start: 0,
			limit: 10,
		};
	public static readonly defaultPeoplePaginationOptions: Required<APIPaginationOptions> =
		{
			...APIConstants.defaultPaginationOptions,
		};
	public static readonly defaultMerchantsPaginationOptions: Required<APIPaginationOptions> =
		{
			...APIConstants.defaultPaginationOptions,
		};
	public static readonly defaultTransactionsPaginationOptions: Required<APIPaginationOptions> =
		{
			...APIConstants.defaultPaginationOptions,
		};
}

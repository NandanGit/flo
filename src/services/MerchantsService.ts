import { APIConstants } from '../shared/constants/APIConstants';
import merchantSchema, { Merchant } from '../shared/schemas/merchantSchema';
import { APIResponse } from '../shared/types/api';
import { ExcludeId } from '../shared/types/common';
import { ApiService } from './ApiService';

export class MerchantsService extends ApiService<
	typeof merchantSchema,
	Merchant
> {
	constructor() {
		super(
			APIConstants.merchants,
			merchantSchema,
			APIConstants.defaultMerchantsPaginationOptions
		);
	}

	getMerchantById = super.getById;

	getMerchants = super.get;

	search = super.search;

	addMerchant = async (merchant: ExcludeId<Merchant>) =>
		super.add<APIResponse<Merchant>>(merchant);

	// // TODO: Implement this in the backend
	// addMerchants = async (merchants: ExcludeId<Merchant>[]) =>
	// 	super.addMany<APIResponse<Merchant[]>>(merchants);

	updateMerchant = async (id: string, merchant: Partial<Merchant>) =>
		super.update<APIResponse<Merchant>>(id, merchant);

	removeMerchant = async (id: string) =>
		super.remove<APIResponse<Merchant>>(id);

	removeMerchants = async (ids: string[]) =>
		super.removeMany<APIResponse<Merchant[]>>(ids);
}

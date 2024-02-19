import { Merchant } from '../../../shared/schemas/merchantSchema';
import { ReduxState } from './common';

export type MerchantsState = ReduxState<{
	merchants: Merchant[];
}>;

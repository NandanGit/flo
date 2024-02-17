import { AppConstants } from '../constants/AppConstants';

export type Currency = (typeof AppConstants.availableCurrencies)[number];

import { MerchantsService } from '../../services/MerchantsService';
import { PeopleService } from '../../services/PeopleService';
import { TransactionsService } from '../../services/TransactionsService';

export interface ServicesContext {
	peopleService: PeopleService;
	transactionsService: TransactionsService;
	merchantsService: MerchantsService;
}

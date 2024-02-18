import { MerchantsService } from '../../services/MerchantsService';
import { PeopleService } from '../../services/PeopleService';
import { TransactionsService } from '../../services/TransactionsService';
import { UserService } from '../../services/UserService';

export interface ServicesContext {
	userService: UserService;
	peopleService: PeopleService;
	transactionsService: TransactionsService;
	merchantsService: MerchantsService;
}

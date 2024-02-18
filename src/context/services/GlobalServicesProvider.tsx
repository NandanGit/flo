import { MerchantsService } from '../../services/MerchantsService';
import { PeopleService } from '../../services/PeopleService';
import { TransactionsService } from '../../services/TransactionsService';
import { GlobalServicesContext } from './GlobalServicesContext';
import { ServicesContext } from './ServicesContext';

export const GlobalServicesProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const services: ServicesContext = {
		peopleService: new PeopleService(),
		transactionsService: new TransactionsService(),
		merchantsService: new MerchantsService(),
	};
	return (
		<GlobalServicesContext.Provider value={services}>
			{children}
		</GlobalServicesContext.Provider>
	);
};

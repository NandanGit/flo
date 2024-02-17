import { PeopleService } from '../../shared/services/PeopleService';
import { GlobalServicesContext } from './GlobalServicesContext';
import { ServicesContext } from './ServicesContext';

export const GlobalServicesProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const services: ServicesContext = {
		peopleService: new PeopleService(),
	};
	return (
		<GlobalServicesContext.Provider value={services}>
			{children}
		</GlobalServicesContext.Provider>
	);
};

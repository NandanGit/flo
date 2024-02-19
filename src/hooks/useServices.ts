import { useContext } from 'react';
import { GlobalServicesContext } from '../context/services/GlobalServicesContext';

export const useServices = () => {
	const services = useContext(GlobalServicesContext);
	if (!services) {
		throw new Error('useServices must be used within a ServicesProvider');
	}
	return services;
};

import { createContext } from 'react';
import { ServicesContext } from './ServicesContext';

export const GlobalServicesContext = createContext<ServicesContext | null>(
	null
);

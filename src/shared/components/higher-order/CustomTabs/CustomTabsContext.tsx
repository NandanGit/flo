import { createContext } from 'react';

export interface CustomTabsContextValue<T, K> {
	tabs: T[];
	keys: K[];
	selected: K;
	select: (key: K) => void;
}

export const CustomTabsContext = createContext<CustomTabsContextValue<
	unknown,
	unknown
> | null>(null);

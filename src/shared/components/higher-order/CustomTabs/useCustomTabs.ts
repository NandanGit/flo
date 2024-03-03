import { useContext } from 'react';
import { CustomTabsContext, CustomTabsContextValue } from './CustomTabsContext';

const useCustomTabs = <T, K>() => {
	const ctx = useContext(CustomTabsContext);
	if (!ctx) {
		throw new Error('useCustomTabs must be used within a CustomTabsProvider');
	}
	return ctx as CustomTabsContextValue<T, K>;
};

export default useCustomTabs;

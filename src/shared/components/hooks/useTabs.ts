import { useState } from 'react';

export interface UseTabsProps<T> {
	tabs: T[];
	initialTab?: T;
}

const useTabs = <T>({ tabs, initialTab }: UseTabsProps<T>) => {
	if (!tabs || tabs.length === 0) {
		throw new Error('Tabs array is empty: At least one tab is required');
	}

	const [selectedTab, setSelectedTab] = useState<T>(initialTab || tabs[0]);

	const selectTab = (tab: T) => {
		setSelectedTab(tab);
	};

	return { selectedTab, selectTab, tabs };
};

export default useTabs;

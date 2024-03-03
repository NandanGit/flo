import React, { useState } from 'react';
import { CustomTabsContext } from './CustomTabsContext';

export interface CustomTabsProps<T, K> {
	tabs: T[];
	keys: K[];
	initial?: K;
	children: React.ReactNode;
}

const CustomTabs = <T, K>({
	tabs,
	keys,
	initial,
	children,
}: CustomTabsProps<T, K>) => {
	if (!keys || keys.length === 0) {
		throw new Error('No keys provided, At least one key is required');
	}
	initial = initial || keys[0];
	const [active, setActive] = useState(initial);

	return (
		<CustomTabsContext.Provider
			value={{
				tabs,
				keys,
				selected: active,
				select: (key) => {
					setActive(key as K);
				},
			}}
		>
			{children}
		</CustomTabsContext.Provider>
	);
};

export default CustomTabs;

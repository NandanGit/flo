import { AppIcons } from '../shared/Icon';

export const getRandomIcon = () => {
	// AppIcons is an enum. Using the values, generate a random icon
	const icons = Object.values(AppIcons);
	const randomIndex = Math.floor(Math.random() * icons.length);
	return icons[randomIndex];
};

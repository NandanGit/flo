// Pascal case to kebab case
export const pascalToKebabCase = (str: string) => {
	return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const kebabToCamelCase = (str: string) => {
	return str.replace(/-./g, (match) => match.toUpperCase()[1]);
};

export const kebabToPascalCase = (str: string) =>
	capitalize(kebabToCamelCase(str));

export const kebabToSnakeCase = (str: string) => {
	return str.replace(/-/g, '_');
};

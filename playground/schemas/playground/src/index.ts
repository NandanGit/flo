import { generateCustomId } from './uniqueId';
const keyFormatter = (key: string, padding: number = 15) =>
	key.padStart(padding, ' ') + ' :';

console.log(
	keyFormatter('User ID'),
	generateCustomId({
		prefix: 'U',
	})
);
console.log(
	keyFormatter('Trans ID'),
	generateCustomId({
		prefix: 'T',
		randomBytes: 6,
	})
);
console.log(
	keyFormatter('Account ID'),
	generateCustomId({
		prefix: 'A',
		randomBytes: 2,
	})
);
console.log(
	keyFormatter('Person ID'),
	generateCustomId({
		prefix: 'P',
		randomBytes: 3,
	})
);
console.log(
	keyFormatter('Merch ID'),
	generateCustomId({
		prefix: 'M',
		randomBytes: 4,
	})
);
console.log(
	keyFormatter('Category ID'),
	generateCustomId({
		prefix: 'C',
	})
);

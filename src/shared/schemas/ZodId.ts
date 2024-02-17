import { z } from 'zod';

const zodId = (errorMessage = 'Invalid id') => {
	return z.string().uuid({
		message: errorMessage,
	});
};
export default zodId; // Path: src/shared/schemas/ZodId.ts

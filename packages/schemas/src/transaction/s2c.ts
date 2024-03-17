/* eslint-disable no-mixed-spaces-and-tabs */
import { resolveAccountType } from '../shared/utils/id';
import s2cTransactionSchemaRaw from './s2cRaw';

// This is only for the purpose of transforming the data. It is not used for refine methods
const s2cTransactionSchema = s2cTransactionSchemaRaw.transform((data) => {
	const { split } = data;
	// If none of them are pending, then it is settled
	const isSettled = split?.splits.every(({ status }) => status !== 'PENDING');

	return {
		...data,
		senderType: resolveAccountType(data.fromId),
		receiverType: resolveAccountType(data.toId),
		split:
			split === undefined
				? undefined
				: {
						...split,
						isSettled,
				  },
	};
});

export default s2cTransactionSchema;

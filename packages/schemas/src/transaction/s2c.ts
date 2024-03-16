/* eslint-disable no-mixed-spaces-and-tabs */
import { resolveAccountType } from '../shared/utils/id';
import s2cTransactionSchemaRaw from './s2cRaw';

const s2cTransactionSchema = s2cTransactionSchemaRaw.transform((data) => {
	const { split } = data;
	const isSettled = split?.splits.every((split) => split.debtStatus === 'PAID');

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

/* eslint-disable no-mixed-spaces-and-tabs */
import { FloConstants } from '@flo.app/constants';
import s2cTransactionSchemaRaw from './s2cRaw';
const TR = FloConstants.schema.transaction;

const c2sTransactionSchema = s2cTransactionSchemaRaw
	.omit({
		id: true,
		createdAt: true,
		updatedAt: true,
	})
	.refine(
		(data) => {
			// If recurring is present, the recurring.until should be greater than the startDate
			if (data.recurring?.until) {
				return data.startDate < data.recurring.until;
			}
		},
		{
			message: TR.errors.others.END_DATE_BEFORE_START_DATE,
		}
	)
	.refine(
		(data) => {
			if (data.type !== 'EXPENSE') {
				return !data.split; // If the transaction is not an expense, it should not have a split
			}
			return true;
		},
		{
			message: TR.errors.split.validForTransfer,
		}
	)
	.refine(
		({ split, amount }) => {
			if (!split) return true;
			// The sum of all split amounts should be less than or equal to the transaction amount
			// If the sum is less than the transaction amount, it means that the difference is the amount paid by the user. Rest of the amount is from the persons involved in the split
			const sum = split.splits.reduce((acc, curr) => {
				return acc + curr.amount;
			}, 0);
			return sum <= amount;
		},
		{ message: TR.errors.split.invalid }
	)
	.refine(
		(data) => {
			if (data.type === 'TRANSFER') {
				return data.fromId !== data.toId;
			}
			return true;
		},
		{
			message: TR.errors.others.INVALID_TRANSFER,
		}
	)
	.transform((data) => {
		const { startDate, recurring } = data;
		const { until, skipped } = recurring || {};

		return {
			...data,
			startDate: startDate.toISOString(),
			recurring:
				recurring === undefined
					? undefined
					: {
							...recurring,
							until: until?.toISOString(),
							skipped: skipped?.map((date) => date.toISOString()),
					  },
		};
	});

export default c2sTransactionSchema;

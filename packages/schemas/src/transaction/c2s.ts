/* eslint-disable no-mixed-spaces-and-tabs */

import c2sTransactionSchemaRaw from './c2sRaw';

const c2sTransactionSchema = c2sTransactionSchemaRaw.transform((data) => {
	const { recurring, startDate } = data;
	const { until, skipped } = recurring || {};
	return {
		...data,
		startDate: new Date(startDate),
		recurring: {
			until: until ? new Date(until) : undefined,
			skipped: skipped ? skipped.map((date) => new Date(date)) : undefined,
		},
	};
});

export default c2sTransactionSchema;

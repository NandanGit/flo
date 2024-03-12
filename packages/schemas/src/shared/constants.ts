export const SchemaConstants = {
	transaction: {
		amount: {
			MAX: 99_00_000,
			MIN: 0,
		},
		title: {
			MAX_LENGTH: 50,
			MIN_LENGTH: 3,
		},
		description: {
			MAX_LENGTH: 500,
		},
		recurring: {
			every: {
				min: 1,
				max: 30,
			},
		},
	},
	person: {
		name: {
			MAX_LENGTH: 50,
			MIN_LENGTH: 3,
		},
	},
	merchant: {
		name: {
			MAX_LENGTH: 50,
			MIN_LENGTH: 3,
		},
	},
};

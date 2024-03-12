// export const MAX_AMOUNT_PER_TRANSACTION = 99_00_000;
// export const MAX_TITLE_LENGTH = 50;
// export const MIN_TITLE_LENGTH = 3;
// export const MAX_DESCRIPTION_LENGTH = 500;
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

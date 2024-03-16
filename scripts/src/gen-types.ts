/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { printNode, zodToTs, createTypeAlias } = require('zod-to-ts');
const {
	// Transaction
	s2cTransactionSchemaRaw,
	s2cTransactionSchema,
	c2sTransactionSchemaRaw,
	c2sTransactionSchema,
	// Account
	s2cAccountSchemaRaw,
	s2cAccountSchema,
	c2sAccountSchemaRaw,
	c2sAccountSchema,
	// Category
	s2cCategorySchemaRaw,
	s2cCategorySchema,
	c2sCategorySchemaRaw,
	c2sCategorySchema,
} = require('@flo.app/schemas');

const map = {
	transaction: {
		TransactionIn: s2cTransactionSchemaRaw,
		Transaction: s2cTransactionSchema,
		TransactionOut: c2sTransactionSchemaRaw,
	},
	account: {
		AccountIn: s2cAccountSchemaRaw,
		Account: s2cAccountSchema,
		AccountOut: c2sAccountSchemaRaw,
	},
	category: {
		CategoryIn: s2cCategorySchemaRaw,
		Category: s2cCategorySchema,
		CategoryOut: c2sCategorySchemaRaw,
	},
	// And rest of the schemas. For each schema, you can generate types.
};

console.log('Generating types...');
for (const [key, value] of Object.entries(map)) {
	console.log(`Generating types for ${key}...`);
	for (const [identifier, schema] of Object.entries(value)) {
		const { node } = zodToTs(schema, identifier);
		const typeAlias = createTypeAlias(node, identifier);
		const dir = path.join(__dirname, `../dist/types/${key}`);
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
			console.log(`Created directory ${dir}`);
		}
		const file = path.join(dir, `${identifier}.ts`);
		fs.writeFileSync(file, printNode(typeAlias));
		console.log(`Generated types for ${key}/${identifier}`);
	}
}

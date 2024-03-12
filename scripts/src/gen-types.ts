/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { printNode, zodToTs, createTypeAlias } = require('zod-to-ts');
const {
	s2cTransactionSchemaRaw,
	s2cTransactionSchema,
	c2sTransactionSchema,
} = require('@flo.app/schemas');

const map = {
	transaction: {
		TransactionIn: s2cTransactionSchemaRaw,
		Transaction: s2cTransactionSchema,
		TransactionOut: c2sTransactionSchema,
	},
	account: {
		AccountIn: s2cTransactionSchemaRaw,
		Account: s2cTransactionSchema,
		AccountOut: c2sTransactionSchema,
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

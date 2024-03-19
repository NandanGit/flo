import { printNode, zodToTs } from 'zod-to-ts';
import { s2cTransactionSchemaRaw } from '@flo.app/schemas';

const { node } = zodToTs(s2cTransactionSchemaRaw, 'Transaction');
const result = printNode(node);
console.log(result);

import {
	s2cAccountSchema,
	s2cCategorySchema,
	s2cPaymentProcessorSchemaRaw,
	s2cTransactionSchema,
} from '@flo.app/schemas';
import AppRouter from './common/navigation/AppRouter';
console.log('Parsing result:', s2cTransactionSchema.safeParse({}));
console.log('Parsing result:', s2cAccountSchema.safeParse({}));
console.log('Parsing result:', s2cCategorySchema.safeParse({}));
console.log('Parsing result:', s2cPaymentProcessorSchemaRaw.safeParse({}));

function App() {
	return <AppRouter />;
}

export default App;

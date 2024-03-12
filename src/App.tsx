import { s2cTransactionSchema } from '@flo.app/schemas';
import AppRouter from './common/navigation/AppRouter';
console.log('Parsing result:', s2cTransactionSchema.safeParse({}));
function App() {
	return <AppRouter />;
}

export default App;

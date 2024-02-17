import AppRouter from './common/navigation/AppRouter';
import { GlobalServicesProvider } from './context/services/GlobalServicesProvider';

function App() {
	return (
		<GlobalServicesProvider>
			<AppRouter />
		</GlobalServicesProvider>
	);
}

export default App;

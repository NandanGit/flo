import { AppBar, Toolbar } from '@mui/material';
import AppRouter from './common/navigation/AppRouter';

function App() {
	return <AppRouter />;
	return (
		<AppBar
			position='static'
			style={
				{
					// backgroundImage: 'none',
					// backgroundImage:
					// 	'linear-gradient(rgba(30, 30, 30, 0.09), rgba(30, 30, 30, 0.09))',
				}
			}
		>
			<Toolbar>
				<h2>Flo</h2>
			</Toolbar>
		</AppBar>
	);
}

export default App;

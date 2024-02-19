import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { glassThemeDark } from './themes';
import './index.css';
import { GlobalServicesProvider } from './context/services/GlobalServicesProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalServicesProvider>
				<ThemeProvider theme={glassThemeDark}>
					<App />
				</ThemeProvider>
			</GlobalServicesProvider>
		</Provider>
	</React.StrictMode>
);

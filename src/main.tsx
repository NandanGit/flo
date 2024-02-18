import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { glassThemeDark } from './themes';
import './index.css';
import { GlobalServicesProvider } from './context/services/GlobalServicesProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalServicesProvider>
			<ThemeProvider theme={glassThemeDark}>
				<App />
			</ThemeProvider>
		</GlobalServicesProvider>
	</React.StrictMode>
);

import { createTheme } from '@mui/material/styles';

/**
 * Create a theme instance with glassmorphism effect
 * Create the theme for dark mode
 * Modify the styles of any component needed to support the glassmorphism effect
 */

export const glassThemeDark = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			// Purple primary color
			main: '#AF7AC5',
		},
		secondary: {
			main: '#ccc',
		},
		background: {
			default: 'rgba(30, 30, 30, 0.9)',
		},
	},
	shape: {
		borderRadius: 12,
	},
	components: {
		// Paper with glassmorphism effect
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(30, 30, 30, 0.2)',
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(128, 128, 128, 0.25)',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
				},
			},
		},
		// Button with glassmorphism effect
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(80, 80, 80, 0.6)',
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(128, 128, 128, 0.1)',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				},
			},
		},
	},
});

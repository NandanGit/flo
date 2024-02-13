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
		// AppBar with glassmorphism effect
		MuiAppBar: {
			styleOverrides: {
				root: {
					// backgroundImage: 'none',
					backgroundColor: 'transparent',
					border: 'none',
					backdropFilter: 'none',
					boxShadow: 'none',
					backgroundImage:
						'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.0))',
					// border: 'none',
					// borderBottom: '0.05rem solid rgba(128, 128, 128, 0.1)',
				},
			},
		},
		// Paper with glassmorphism effect
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(30, 30, 30, 0.2)',
					backdropFilter: 'blur(0.5rem)',
					// border: '0.8px solid rgba(128, 128, 128, 0.05)',
					// borderRight: 'none',
					// borderTop: 'none',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
				},
			},
		},
		// Button with glassmorphism effect
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(80, 80, 80, 0.25)',
					backdropFilter: 'blur(0.5rem)',
					border: '0.8px solid rgba(128, 128, 128, 0.05)',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				},
			},
		},
		// Menu with glassmorphism effect
		MuiMenuItem: {
			styleOverrides: {
				root: {
					margin: '0 0.5rem',
					borderRadius: '0.5rem',
				},
			},
		},

		// List with glassmorphism effect
		MuiListItemButton: {
			styleOverrides: {
				root: {
					borderRadius: '0.5rem',
					margin: '0.25rem 0',
					// '&:hover': {
					// 	backgroundColor: 'rgba(255, 255, 255, 0.1)',
					// },
				},
			},
		},
	},
});

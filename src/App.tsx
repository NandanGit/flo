import { Close } from '@mui/icons-material';
import {
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Icon,
	IconButton,
} from '@mui/material';
import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	const [dialogIsOpen, setDialogIsOpen] = useState(true);

	return (
		<Container
			style={{
				padding: 20,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 20,
				width: 200,
				margin: 'auto',
				marginTop: 100,
			}}
		>
			<Button onClick={() => setDialogIsOpen(true)} color='primary'>
				Open Dialog
			</Button>
			<Button onClick={() => setDialogIsOpen(true)} color='secondary'>
				Open Dialog
			</Button>
			<Button onClick={() => setDialogIsOpen(true)} color='error'>
				Open Dialog
			</Button>
			<Button onClick={() => setDialogIsOpen(true)} color='warning'>
				Open Dialog
			</Button>
			<Button onClick={() => setDialogIsOpen(true)} color='info'>
				Open Dialog
			</Button>
			<Button onClick={() => setDialogIsOpen(true)} color='success'>
				Open Dialog
			</Button>

			<Dialog open={dialogIsOpen}>
				<DialogTitle>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<h2>Counter</h2>
						<IconButton onClick={() => setDialogIsOpen(false)}>
							<Icon>
								<Close />
							</Icon>
						</IconButton>
					</div>
				</DialogTitle>
				<DialogContent>
					<p>Current count: {count}</p>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setCount(count + 1)}>Increment</Button>
					<Button onClick={() => setCount(count - 1)}>Decrement</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
}

export default App;

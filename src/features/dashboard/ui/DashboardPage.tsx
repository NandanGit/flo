import { Close } from '@mui/icons-material';
import {
	Button,
	Dialog,
	DialogTitle,
	IconButton,
	Icon,
	DialogContent,
	DialogActions,
	Card,
} from '@mui/material';
import React, { useState } from 'react';
import { AppPage } from '../../../shared/AppPage';

const DashboardPage: React.FC = () => {
	const [dialogIsOpen, setDialogIsOpen] = useState(false);
	const [count, setCount] = useState(0);

	return (
		<AppPage title='Dashboard'>
			<Card style={{ padding: '1rem' }}>
				<Button onClick={() => setDialogIsOpen(true)} color='primary'>
					Open Counter
				</Button>
				<br />
				<br />
				<Button onClick={() => setDialogIsOpen(true)} color='secondary'>
					Open Counter
				</Button>
				<br />
				<br />
				<Button onClick={() => setDialogIsOpen(true)} color='error'>
					Open Counter
				</Button>
				<br />
				<br />
				<Button onClick={() => setDialogIsOpen(true)} color='warning'>
					Open Counter
				</Button>
				<br />
				<br />
				<Button onClick={() => setDialogIsOpen(true)} color='info'>
					Open Counter
				</Button>
				<br />
				<br />
				<Button onClick={() => setDialogIsOpen(true)} color='success'>
					Open Counter
				</Button>
			</Card>

			<Dialog open={dialogIsOpen} color='error'>
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
		</AppPage>
	);
};

export default DashboardPage;

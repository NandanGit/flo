import jsonServer from 'json-server';
import { allowRouteMethods } from './middlewares.js';
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
	// Log the request summary in a single line
	console.log(`${req.method} ${req.path}`);
	setTimeout(
		next
		// 2000 // Add a 2-second delay
	);
});

server.use(allowRouteMethods('/user', ['GET']));

server.use(router);
const PORT = 3001;
server.listen(PORT, () => {
	console.log('JSON Server is running on port:', PORT);
});

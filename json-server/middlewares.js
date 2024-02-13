/**
 * @param {string} route
 * @param {string[]} methods
 */
export const restrictRouteMethods = (route, methods) => {
	methods = methods.map((method) => method.toUpperCase());
	return (req, res, next) => {
		if (req.path.startsWith(route) && !methods.includes(req.method)) {
			res.status(405).send('Method Not Allowed');
		} else {
			next();
		}
	};
};

/**
 * @param {string} route
 * @param {string[]} methods
 */
export const allowRouteMethods = (route, methods) => {
	methods = methods.map((method) => method.toUpperCase());
	return (req, res, next) => {
		if (req.path.startsWith(route) && methods.includes(req.method)) {
			next();
		} else {
			res.status(405).send('Method Not Allowed');
		}
	};
};

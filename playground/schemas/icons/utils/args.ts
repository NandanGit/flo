// A utility function to parse command line arguments which handles both short and long options

type Args = {
	[key: string]: string;
};

export const parseArgs = (args: string[]): Args => {
	const parsedArgs: Args = {};

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg.startsWith('-')) {
			const key = arg.replace(/^-+/, '');
			const value = args[i + 1];
			parsedArgs[key] = value;
		}
	}

	return parsedArgs;
};

// Example usage
// const args = parseArgs(process.argv.slice(2));
// console.log(args);
// $ node index.js -w 24 -h 24 -f none -c #000000 --stroke-width 1.5 --stroke-linecap round --stroke-linejoin round --stroke currentColor
// { w: '24', h: '24', f: 'none', c: '#000000', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', stroke: 'currentColor' }

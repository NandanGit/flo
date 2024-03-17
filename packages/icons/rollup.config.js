import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs',
		},
		{
			file: 'dist/index.es.js',
			format: 'esm',
		},
	],
	plugins: [
		peerDepsExternal(),
		typescript({
			useTsconfigDeclarationDir: true,
		}),
		resolve(),
		commonjs(),
		terser(),
	],
};

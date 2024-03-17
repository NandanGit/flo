/* eslint-disable no-undef */
// jest config file for rollup project
module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
	moduleFileExtensions: ['js', 'json', 'node'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js'],
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
};

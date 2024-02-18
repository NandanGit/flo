/* eslint-disable no-undef */
// Gaussian random between a, b (both inclusive)

const gaussianRandom = (a, b) => {
	const mean = (a + b) / 2;
	const std = (b - a) / 6;
	let u = 0;
	let v = 0;
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	let x = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
	x = x * std + mean;
	if (x < a || x > b) x = gaussianRandom(a, b);
	return x;
};

module.exports = {
	gaussianRandom,
};

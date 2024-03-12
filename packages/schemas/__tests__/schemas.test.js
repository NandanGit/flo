'use strict';

const schemas = require('..');
const assert = require('assert').strict;

assert.strictEqual(schemas(), 'Hello from schemas');
console.info('schemas tests passed');

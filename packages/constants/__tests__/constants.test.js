'use strict';

const constants = require('..');
const assert = require('assert').strict;

assert.strictEqual(constants(), 'Hello from constants');
console.info('constants tests passed');

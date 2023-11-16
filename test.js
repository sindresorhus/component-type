/* eslint-disable no-new-wrappers, unicorn/new-for-builtins, no-array-constructor, prefer-rest-params, n/prefer-global/buffer */
const test = require('ava');
const type = require('./index.js');

test('objects', t => {
	function Foo() {}
	t.is(type({}), 'object');
	t.is(type(new Foo()), 'object');
});

test('numbers', t => {
	t.is(type(12), 'number');
	t.is(type(1), 'number');
	t.is(type(-5), 'number');
	t.is(type(new Number(123)), 'number');
	t.is(type(Number.POSITIVE_INFINITY), 'number');
});

test('NaN', t => {
	t.is(type(Number.NaN), 'nan');
});

test('strings', t => {
	t.is(type('test'), 'string');
	t.is(type(new String('whoop')), 'string');
});

test('dates', t => {
	t.is(type(new Date()), 'date');
});

test('booleans', t => {
	t.is(type(true), 'boolean');
	t.is(type(false), 'boolean');
	t.is(type(new Boolean(true)), 'boolean');
});

test('null', t => {
	t.is(type(null), 'null');
});

test('undefined', t => {
	t.is(type(), 'undefined');
	t.is(type(undefined), 'undefined');
});

test('arrays', t => {
	t.is(type([]), 'array');
	t.is(type(new Array()), 'array');
});

test('regexps', t => {
	t.is(type(/asdf/), 'regexp');
});

test('functions', t => {
	t.is(type(() => {}), 'function');
});

test('arguments', t => {
	(function () {
		t.is(type(arguments), 'arguments');
	})();
});

test('elements', t => {
	const foo = {
		key: 'OK',
		nodeType: 1,
	};

	t.not(type(foo), 'element');
});

test('errors', t => {
	t.is(type(new Error('Ups!')), 'error');
});

test('buffers', t => {
	t.is(type(Buffer.alloc(4)), 'buffer');
});

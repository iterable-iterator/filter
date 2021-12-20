import test from 'ava';

import {list} from '@iterable-iterator/list';
import {compress} from '../../src/index.js';
import {repr} from './_fixtures.js';

const macro = (t, iterable, selector, expected) => {
	t.deepEqual(list(compress(iterable, selector)), expected);
};

macro.title = (title, iterable, selector, expected) =>
	title ??
	`compress(${repr(iterable)}, ${repr(selector)}) is ${repr(expected)}`;

test(macro, 'ABC', [0, 0, 0], []);
test(macro, 'ABC', [0, 0, 1], ['C']);
test(macro, 'ABC', [0, 1, 0], ['B']);
test(macro, 'ABC', [0, 1, 1], ['B', 'C']);
test(macro, 'ABC', [1, 0, 0], ['A']);
test(macro, 'ABC', [1, 0, 1], ['A', 'C']);
test(macro, 'ABC', [1, 1, 0], ['A', 'B']);
test(macro, 'ABC', [1, 1, 1], ['A', 'B', 'C']);

test(macro, [0, 1, 2], [0, 0, 0], []);
test(macro, [0, 1, 2], [0, 0, 1], [2]);
test(macro, [0, 1, 2], [0, 1, 0], [1]);
test(macro, [0, 1, 2], [0, 1, 1], [1, 2]);
test(macro, [0, 1, 2], [1, 0, 0], [0]);
test(macro, [0, 1, 2], [1, 0, 1], [0, 2]);
test(macro, [0, 1, 2], [1, 1, 0], [0, 1]);
test(macro, [0, 1, 2], [1, 1, 1], [0, 1, 2]);

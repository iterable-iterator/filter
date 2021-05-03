import test from 'ava';

import {gt, repr} from './_fixtures.js';

import {list} from '@iterable-iterator/list';
import {filter, filtertrue} from '../../src/index.js';

test('filtertrue is filter', (t) => {
	t.is(filtertrue, filter);
});

const macro = (t, predicate, input, output) => {
	t.deepEqual(list(filter(predicate, input)), output);
};

macro.title = (title, predicate, input, output) =>
	title || `filter(${predicate}, ${repr(input)}) = ${repr(output)}`;

test(macro, gt(0), [], []);
test(macro, gt(0), [0], []);
test(macro, gt(0), [6], [6]);

test(macro, gt(0), [-6], []);
test(macro, gt(0), [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
test(macro, gt(0), [0, 0, 1, 2, 0, 3, 0, 4, -7, 5, 6], [1, 2, 3, 4, 5, 6]);

import test from 'ava';

import {list} from '@iterable-iterator/list';
import {filterfalse} from '../../src/index.js';
import {le} from '@aureooms/js-predicate';

const macro = (t, predicate, input, output) => {
	t.deepEqual(list(filterfalse(predicate, input)), output);
};

macro.title = (title, predicate, input, output) =>
	title ||
	`filterfalse(${predicate.name}, ${JSON.stringify(input)}) = ${JSON.stringify(
		output,
	)}`;

test(macro, le(0), [], []);
test(macro, le(0), [0], []);
test(macro, le(0), [6], [6]);

test(macro, le(0), [-6], []);
test(macro, le(0), [0, 1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
test(macro, le(0), [0, 0, 1, 2, 0, 3, 0, 4, -7, 5, 6], [1, 2, 3, 4, 5, 6]);

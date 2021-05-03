import {le as _le, gt as _gt} from '@functional-abstraction/predicate';

const makePredicate = (f, n) => (x) => {
	const _p = f(x);
	const p = (y) => _p(y);
	p.toString = () => `${n}(${x})`;
	return p;
};

export const le = makePredicate(_le, 'le');
export const gt = makePredicate(_gt, 'gt');

export const repr = (x) => JSON.stringify(x);

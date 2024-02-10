:speak_no_evil: [@iterable-iterator/filter](https://iterable-iterator.github.io/filter)
==

Iterable filtering functions for JavaScript.
See [docs](https://iterable-iterator.github.io/filter/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {count} from '@iterable-iterator/count';
import {filter, filterfalse} from '@iterable-iterator/filter';
import {divisible} from '@functional-abstraction/predicate';

filter( divisible( 2 ) , count( 0 , 1 ) ) ; // 0 2 4 8 ...
filterfalse( divisible( 2 ) , count( 0 , 1 ) ) ; // 1 3 5 7 ...

import {cycle} from '@iterable-iterator/cycle';
import {compress} from '@iterable-iterator/filter';
compress( count( 0 , 1 ) , cycle( [ true , false ] ) ) ; // 0 2 4 6 ...
```

[![License](https://img.shields.io/github/license/iterable-iterator/filter.svg)](https://raw.githubusercontent.com/iterable-iterator/filter/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/filter.svg)](https://www.npmjs.org/package/@iterable-iterator/filter)
[![Tests](https://img.shields.io/github/workflow/status/iterable-iterator/filter/ci:test?event=push&label=tests)](https://github.com/iterable-iterator/filter/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/filter.svg)](https://github.com/iterable-iterator/filter/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/filter.svg)](https://github.com/iterable-iterator/filter/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/filter.svg)](https://www.npmjs.org/package/@iterable-iterator/filter)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/filter.svg)](https://codeclimate.com/github/iterable-iterator/filter/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/filter.svg)](https://codeclimate.com/github/iterable-iterator/filter/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/filter/main.svg)](https://codecov.io/gh/iterable-iterator/filter)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/filter.svg)](https://codeclimate.com/github/iterable-iterator/filter/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/filter/badge.svg)](https://iterable-iterator.github.io/filter/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/filter)](https://bundlephobia.com/result?p=@iterable-iterator/filter)

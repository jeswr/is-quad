# is-quad
This package is used to check if an [rdf-js compliant](https://github.com/rdfjs/types/) `BaseQuad` is a valid `Quad` type.

[![GitHub license](https://img.shields.io/github/license/jeswr/useState.svg)](https://github.com/jeswr/is-quad/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/is-quad.svg)](https://www.npmjs.com/package/is-quad)
[![build](https://img.shields.io/github/actions/workflow/status/jeswr/is-quad/nodejs.yml?branch=main)](https://github.com/jeswr/is-quad/tree/main/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

### Checking a `BaseQuad` is a `Quad`

```ts
import isQuad from 'is-quad';
import { namedNode, blankNode } from '@rdfjs/data-model';
import type { BaseQuad } from '@rdfjs/types';

const goodQuad = quad(namedNode('s'), namedNode('p'), namedNode('o'));
const badQuad = quad<BaseQuad>(namedNode('s'), blankNode('p'), namedNode('o'));

isQuad(goodQuad); // true
isQuad(badQuad);  // false
```

### Safely casting a `BaseQuad` as a `Quad`

```ts
import isQuad from 'is-quad';
import { namedNode, blankNode } from '@rdfjs/data-model';
import type { BaseQuad } from '@rdfjs/types';

const goodQuad = quad(namedNode('s'), namedNode('p'), namedNode('o'));
const badQuad = quad<BaseQuad>(namedNode('s'), blankNode('p'), namedNode('o'));

isQuad(goodQuad); // true
isQuad(badQuad);  // false

const quad: Quad = asQuad(goodQuad);
asQuad(badQuad) // Error is thrown
```

### Additional APIs

This package also includes functions to check whether a `Term` is a valid `Quad_Subject`, `Quad_Predicate`, `Quad_Object`, `Quad_Graph` or `Quad` - and likewise cast from terms to these tpyes

```ts
import {
  termIsQuad, isGraph, isQuadSubject, isQuadPredicate, isQuadObject,
  termAsQuad, asGraph, asQuadSubject, asQuadPredicate, asQuadObject,
} from 'is-quad';
import { namedNode, blankNode, defaultGraph } from '@rdfjs/data-model';

const goodQuad = quad(namedNode('s'), namedNode('p'), namedNode('o'));
const badQuad = quad<BaseQuad>(namedNode('s'), blankNode('p'), namedNode('o'));

termIsQuad(goodQuad); // true
termIsQuad(namedNode('s')); // false
termIsQuad(badQuad); // false

termAsQuad(goodQuad); // goodQuad: Quad
termAsQuad(namedNode('s')); // Error
termAsQuad(badQuad); // Error


isGraph(namedNode('s')) // true
isGraph(defaultGraph()) // true
isGraph(goodQuad) // false
isGraph(badQuad) // false
isGraph(literal('s')) // false

asGraph(namedNode('s')) // namedNode('s'): Quad_Graph
asGraph(defaultGraph()) // defaultGraph(): Quad_Graph
asGraph(goodQuad) // Error
asGraph(badQuad) // Error
asGraph(literal('s')) // Error


isQuadSubject(goodQuad); // true
isQuadSubject(namedNode('s')); // true
isQuadSubject(badQuad); // false
isQuadSubject(literal('s')); // false

asQuadSubject(goodQuad); // goodQuad: Quad_Subject
asQuadSubject(namedNode('s')); // namedNode('s'): Quad_Subject
asQuadSubject(badQuad); // Error
asQuadSubject(literal('s')); // Error


isQuadPredicate(goodQuad); // false
isQuadPredicate(namedNode('p')); // true
isQuadPredicate(badQuad); // false
isQuadSubject(literal('p')); // false

asQuadPredicate(goodQuad); // Error
asQuadPredicate(namedNode('p')); // namedNode('p'): Quad_Predicate
asQuadPredicate(badQuad); // Error
asQuadSubject(literal('p')); // Error


isQuadObject(goodQuad); // true
isQuadObject(namedNode('o')); // true
isQuadObject(badQuad); // false
isQuadSubject(literal('o')); // true

asQuadObject(goodQuad); // goodQuad: Quad_Object
asQuadObject(namedNode('o')); // namedNode('o'): Quad_Object
asQuadObject(badQuad); // Error
asQuadSubject(literal('o')); // literal('o'): Quad_Object
```

## License
©2021–present
[Jesse Wright](https://github.com/jeswr),
[MIT License](https://github.com/jeswr/is-quad/blob/master/LICENSE).

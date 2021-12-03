# is-quad
This package is used to check if an [rdf-js compliant](https://github.com/rdfjs/types/) `BaseQuad` is a valid `Quad` type

[![GitHub license](https://img.shields.io/github/license/jeswr/useState.svg)](https://github.com/jeswr/is-quad/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/is-quad.svg)](https://www.npmjs.com/package/is-quad)
[![build](https://img.shields.io/github/workflow/status/jeswr/is-quad/Node.js%20CI)](https://github.com/jeswr/is-quad/tree/main/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

```ts
import isQuad from 'is-quad';
import type { Quad } from '@rdfjs/types';

const quad = isQuad(baseQuad /* An rdf-js compliant BaseQuad */);
```

### Examples
```ts
import isQuad from 'is-quad';
import { namedNode, blankNode } from '@rdfjs/data-model';
import type { Quad, BaseQuad } from '@rdfjs/types';

const goodQuad = quad(namedNode('s'), namedNode('p'), namedNode('o'));
const badQuad = quad<BaseQuad>(namedNode('s'), blankNode('p'), namedNode('o'));

isQuad(goodQuad); // true
isQuad(badQuad);  // false
```

### Additional APIs

This package also includes functions to check whether a `Term` is a valid `Quad_Subject`, `Quad_Predicate`, `Quad_Object`, `Quad_Graph` or `Quad`.

```ts
import {
  termIsQuad, isGraph, isQuadSubject, isQuadPredicate, isQuadObject,
} from 'is-quad';
import { namedNode, blankNode, defaultGraph } from '@rdfjs/data-model';

const goodQuad = quad(namedNode('s'), namedNode('p'), namedNode('o'));
const badQuad = quad<BaseQuad>(namedNode('s'), blankNode('p'), namedNode('o'));

termIsQuad(goodQuad); // true
termIsQuad(namedNode('s')); // false
termIsQuad(badQuad); // false

isGraph(namedNode('s')) // true
isGraph(defaultGraph()) // true
isGraph(goodQuad) // false
isGraph(badQuad) // false
isGraph(literal('s')) // false

isQuadSubject(goodQuad); // true
isQuadSubject(namedNode('s')); // true
isQuadSubject(badQuad); // false
isQuadSubject(literal('s')); // false

isQuadPredicate(goodQuad); // false
isQuadPredicate(namedNode('s')); // true
isQuadPredicate(badQuad); // false
isQuadSubject(literal('s')); // false

isQuadObject(goodQuad); // true
isQuadObject(namedNode('s')); // true
isQuadObject(badQuad); // false
isQuadSubject(literal('s')); // true
```

## License
©2021–present
[Jesse Wright](https://github.com/jeswr),
[MIT License](https://github.com/jeswr/is-quad/blob/master/LICENSE).

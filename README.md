# is-quad
This package is used to check if an [rdf-js compliant](https://github.com/rdfjs/types/) `BaseQuad` is a valid `Quad` type

[![GitHub license](https://img.shields.io/github/license/jeswr/useState.svg)](https://github.com/jeswr/is-quad/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/is-quad.svg)](https://www.npmjs.com/package/is-quad)
[![build](https://img.shields.io/github/workflow/status/jeswr/is-quad/Node.js%20CI)](https://github.com/jeswr/is-quad/tree/main/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

```ts
import isQuad from 'is-quad'
import type { Quad } from '@rdfjs/types'

const quad: Quad = isQuad(baseQuad /* An rdf-js compliant basequad */);
```

This package also includes functions to check for

## License
©2021–present
[Jesse Wright](https://github.com/jeswr),
[MIT License](https://github.com/jeswr/is-quad/blob/master/LICENSE).

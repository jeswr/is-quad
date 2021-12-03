import isQuadDefault, { isQuad } from '../lib';

it('Default export should be isQuad', () => {
  expect(isQuadDefault).toEqual(isQuad);
});
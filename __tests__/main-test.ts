import {
  quad, namedNode, variable, blankNode, literal, defaultGraph,
} from '@rdfjs/data-model';
import { BaseQuad } from '@rdfjs/types';
import isQuad, {
  termIsQuad, isGraph, isQuadSubject, isQuadPredicate, isQuadObject,
} from '../lib';

const NamedNodesQuadWithGraph = quad(namedNode('s'), namedNode('p'), namedNode('o'), namedNode('g'));
const NamedNodesQuad = quad(namedNode('s'), namedNode('p'), namedNode('o'));
const NestedQuads = quad(NamedNodesQuad, namedNode('p'), NamedNodesQuadWithGraph);
const NestedQuadsWithGraph = quad(NamedNodesQuad, namedNode('p'), NamedNodesQuadWithGraph, namedNode('g'));

const BlankPredicate = quad<BaseQuad>(namedNode('s'), blankNode('p'), namedNode('o'), namedNode('g'));
const QuadPredicate = quad<BaseQuad>(namedNode('s'), NamedNodesQuad, namedNode('o'), namedNode('g'));

const NestedInvalidSubject = quad<BaseQuad>(BlankPredicate, namedNode('p'), namedNode('o'));
const NestedInvalidPredicate = quad<BaseQuad>(namedNode('s'), BlankPredicate, namedNode('o'));
const NestedInvalidObject = quad<BaseQuad>(namedNode('s'), namedNode('p'), BlankPredicate);

const NestedInvalidSubject2 = quad<BaseQuad>(BlankPredicate, namedNode('p'), namedNode('o'));
const NestedInvalidPredicate2 = quad<BaseQuad>(namedNode('s'), BlankPredicate, namedNode('o'));
const NestedInvalidObject2 = quad<BaseQuad>(namedNode('s'), namedNode('p'), BlankPredicate);

describe('isQuadSubject checks', () => {
  it('Should identify valid subjects', () => {
    expect(isQuadSubject(namedNode('s'))).toBe(true);
    expect(isQuadSubject(blankNode('s'))).toBe(true);
    expect(isQuadSubject(variable('s'))).toBe(true);
    expect(isQuadSubject(NamedNodesQuadWithGraph)).toBe(true);
    expect(isQuadSubject(NestedQuads)).toBe(true);
  });

  it('Should identify invalid subjects', () => {
    expect(isQuadSubject(literal('s'))).toBe(false);
    expect(isQuadSubject(NestedInvalidObject2)).toBe(false);
    expect(isQuadSubject(defaultGraph())).toBe(false);
  });
});

describe('isQuadPredicate checks', () => {
  it('Should identify valid predicates', () => {
    expect(isQuadPredicate(namedNode('p'))).toBe(true);
    expect(isQuadPredicate(variable('p'))).toBe(true);
  });

  it('Should identify invalid predicates', () => {
    expect(isQuadPredicate(literal('p'))).toBe(false);
    expect(isQuadPredicate(NestedInvalidObject2)).toBe(false);
    expect(isQuadPredicate(defaultGraph())).toBe(false);
    expect(isQuadPredicate(blankNode('p'))).toBe(false);
    expect(isQuadPredicate(NamedNodesQuadWithGraph)).toBe(false);
    expect(isQuadPredicate(NestedQuads)).toBe(false);
  });
});

describe('isQuadObject checks', () => {
  it('Should identify valid object', () => {
    expect(isQuadObject(namedNode('o'))).toBe(true);
    expect(isQuadObject(variable('o'))).toBe(true);
    expect(isQuadObject(blankNode('o'))).toBe(true);
    expect(isQuadObject(NamedNodesQuadWithGraph)).toBe(true);
    expect(isQuadObject(NestedQuads)).toBe(true);
    expect(isQuadObject(literal('o'))).toBe(true);
  });

  it('Should identify invalid object', () => {
    expect(isQuadObject(NestedInvalidObject2)).toBe(false);
    expect(isQuadObject(defaultGraph())).toBe(false);
  });
});

describe('isGraph checks', () => {
  it('Should identify valid graphs', () => {
    expect(isGraph(namedNode('g'))).toBe(true);
    expect(isGraph(blankNode('g'))).toBe(true);
    expect(isGraph(variable('g'))).toBe(true);
    expect(isGraph(defaultGraph())).toBe(true);
  });

  it('Should identify invalid graphs', () => {
    expect(isGraph(literal('g'))).toBe(false);
    expect(isGraph(NamedNodesQuadWithGraph)).toBe(false);
    expect(isGraph(QuadPredicate)).toBe(false);
    expect(isGraph(NestedInvalidObject2)).toBe(false);
  });
});

describe('termIsQuad checks', () => {
  it('Should identify valid quads', () => {
    expect(termIsQuad(NamedNodesQuadWithGraph)).toBe(true);
    expect(termIsQuad(NamedNodesQuad)).toBe(true);
    expect(termIsQuad(NestedQuads)).toBe(true);
    expect(termIsQuad(NestedQuadsWithGraph)).toBe(true);
    expect(termIsQuad(NestedQuadsWithGraph)).toBe(true);
  });

  it('Should identify invalid quads', () => {
    expect(termIsQuad(BlankPredicate)).toBe(false);
    expect(termIsQuad(NestedInvalidSubject)).toBe(false);
    expect(termIsQuad(NestedInvalidPredicate)).toBe(false);
    expect(termIsQuad(NestedInvalidObject)).toBe(false);
    expect(termIsQuad(QuadPredicate)).toBe(false);
    expect(termIsQuad(NestedInvalidSubject2)).toBe(false);
    expect(termIsQuad(NestedInvalidPredicate2)).toBe(false);
    expect(termIsQuad(NestedInvalidObject2)).toBe(false);
  });
});

describe('isQuad checks', () => {
  it('Should identify valid quads', () => {
    expect(isQuad(NamedNodesQuadWithGraph)).toBe(true);
    expect(isQuad(NamedNodesQuad)).toBe(true);
    expect(isQuad(NestedQuads)).toBe(true);
    expect(isQuad(NestedQuadsWithGraph)).toBe(true);
    expect(isQuad(NestedQuadsWithGraph)).toBe(true);
  });

  it('Should identify invalid quads', () => {
    expect(isQuad(BlankPredicate)).toBe(false);
    expect(isQuad(NestedInvalidSubject)).toBe(false);
    expect(isQuad(NestedInvalidPredicate)).toBe(false);
    expect(isQuad(NestedInvalidObject)).toBe(false);
    expect(isQuad(QuadPredicate)).toBe(false);
    expect(isQuad(NestedInvalidSubject2)).toBe(false);
    expect(isQuad(NestedInvalidPredicate2)).toBe(false);
    expect(isQuad(NestedInvalidObject2)).toBe(false);
  });
});

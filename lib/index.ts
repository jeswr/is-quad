import type {
  BaseQuad, Quad_Object, Quad_Predicate, Quad_Subject, Term, Quad, Quad_Graph,
} from '@rdfjs/types';

/**
 * Checks if an rdf-js Term is an rdf-js Quad_Subject
 */
export function isQuadSubject(term: Term): term is Quad_Subject {
  return term.termType === 'NamedNode'
    || term.termType === 'BlankNode'
    || term.termType === 'Variable'
    || termIsQuad(term);
}

/**
 * Checks if an rdf-js Term is an rdf-js Quad_Predicate
 */
export function isQuadPredicate(term: Term): term is Quad_Predicate {
  return term.termType === 'NamedNode' || term.termType === 'Variable';
}

/**
 * Checks if an rdf-js Term is an rdf-js Quad_Object
 */
export function isQuadObject(term: Term): term is Quad_Object {
  return term.termType === 'NamedNode'
    || term.termType === 'Literal'
    || term.termType === 'BlankNode'
    || term.termType === 'Variable'
    || termIsQuad(term);
}

/**
 * Checks if an rdf-js Term is an rdf-js Quad_Graph
 */
export function isGraph(term: Term): term is Quad_Graph {
  return term.termType === 'DefaultGraph'
    || term.termType === 'NamedNode'
    || term.termType === 'BlankNode'
    || term.termType === 'Variable';
}

/**
 * Checks if an rdf-js BaseQuad is an rdf-js Quad
 */
export function isQuad(term: BaseQuad): term is Quad {
  return isQuadSubject(term.subject)
    && isQuadPredicate(term.predicate)
    && isQuadObject(term.object)
    && isGraph(term.graph);
}

/**
 * Checks if an rdf-js Term is an rdf-js Quad
 */
export function termIsQuad(term: Term): term is Quad {
  return term.termType === 'Quad' && isQuad(term);
}

export default isQuad;

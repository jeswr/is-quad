import { asFactory } from './utils';
import * as isCheck from './is';

export const asQuadSubject = asFactory(isCheck.isQuadSubject);
export const asQuadPredicate = asFactory(isCheck.isQuadPredicate);
export const asQuadObject = asFactory(isCheck.isQuadObject);
export const asGraph = asFactory(isCheck.isGraph);

export const asQuad = asFactory(isCheck.isQuad);
export const termAsQuad = asFactory(isCheck.termIsQuad);

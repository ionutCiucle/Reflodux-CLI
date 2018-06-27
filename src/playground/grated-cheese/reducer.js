import type { GratedCheeseState } from './types';

,const initialState: GratedCheeseState = {};

,export default const gratedCheese = (state: GratedCheeseState = initialState, action: GratedCheeseAction): gratedCheeseState => {
,  switch(action.type) {
,    default: return state;
,  }
,}
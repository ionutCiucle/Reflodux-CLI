import type { StoneFreeState } from './types';

,const initialState: StoneFreeState = {};

,export default const stoneFree = (state: StoneFreeState = initialState, action: StoneFreeAction): stoneFreeState => {
,  switch(action.type) {
,    default: return state;
,  }
,}
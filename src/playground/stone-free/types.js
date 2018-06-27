//@flow 
export type StoneFreeState = {}; 

// Action Types 
// Module Action Type 
export type StoneFreeAction = 

type GetState = () => { stoneFree: StoneFreeState };
type PromiseAction = Promise<StoneFreeAction>;
export type Dispatch = (action: StoneFreeAction | ThunkAction | PromiseAction | Array<StoneFreeAction>) => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
//@flow 
export type GratedCheeseState = {}; 

// Action Types 
export const REMOVE_STINKY_PIECE_OF_CHEESE: 'REMOVE_STINKY_PIECE_OF_CHEESE' = 'REMOVE_STINKY_PIECE_OF_CHEESE';
export type REMOVE_STINKY_PIECE_OF_CHEESE_ACTION = { type: typeof REMOVE_STINKY_PIECE_OF_CHEESE };

export const REMOVE_STINKY_PIECE_OF_CHEESE: 'REMOVE_STINKY_PIECE_OF_CHEESE' = 'REMOVE_STINKY_PIECE_OF_CHEESE';
export type REMOVE_STINKY_PIECE_OF_CHEESE_ACTION = { type: typeof REMOVE_STINKY_PIECE_OF_CHEESE };

export const REMOVE_STINKY_PIECE_OF_CHEESE: 'REMOVE_STINKY_PIECE_OF_CHEESE' = 'REMOVE_STINKY_PIECE_OF_CHEESE';
export type REMOVE_STINKY_PIECE_OF_CHEESE_ACTION = { type: typeof REMOVE_STINKY_PIECE_OF_CHEESE };
export const REMOVE_STINKY_PIECE_OF_CHEESE: 'REMOVE_STINKY_PIECE_OF_CHEESE' = 'REMOVE_STINKY_PIECE_OF_CHEESE';
export type REMOVE_STINKY_PIECE_OF_CHEESE_ACTION = { type: typeof REMOVE_STINKY_PIECE_OF_CHEESE };

export const ADD_NEW_PIECE_OF_CHEESE: 'ADD_NEW_PIECE_OF_CHEESE' = 'ADD_NEW_PIECE_OF_CHEESE';
,export type ADD_NEW_PIECE_OF_CHEESE_ACTION = { type: typeof ADD_NEW_PIECE_OF_CHEESE };

// Module Action Type 
export type GratedCheeseAction = {}
  | REMOVE_STINKY_PIECE_OF_CHEESE_ACTION

  | REMOVE_STINKY_PIECE_OF_CHEESE_ACTION

  | REMOVE_STINKY_PIECE_OF_CHEESE_ACTION

  | REMOVE_STINKY_PIECE_OF_CHEESE_ACTION

  | ADD_NEW_PIECE_OF_CHEESE_ACTION


type GetState = () => { gratedCheese: GratedCheeseState };
type PromiseAction = Promise<GratedCheeseAction>;
export type Dispatch = (action: GratedCheeseAction | ThunkAction | PromiseAction | Array<GratedCheeseAction>) => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
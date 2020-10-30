type ActionType = {
  failure: string;
  success: string;
  started: string;
};

export const createActionType = (type: string): ActionType => ({
  failure: `${type}_FAILURE`,
  success: `${type}_SUCCESS`,
  started: `${type}_STARTED`,
});

export type Action<P = any> = {
  type: string;
  payload?: P;
};

export const createAction = <P = any>(type: string, payload?: P): Action<P> =>
  payload ? { type, payload } : { type };

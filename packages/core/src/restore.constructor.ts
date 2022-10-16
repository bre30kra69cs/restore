import {Rec, Restore, RestoreTemplate, Action, Actions} from './restore.types';

export const restore = <T extends Rec, A extends Actions>(
  template: RestoreTemplate<T, A>,
): Restore<T, A> => {
  const name = template.name;
  let state = template.state;

  const set = (nextState: Partial<T>) => {
    state = {
      ...state,
      ...nextState,
    };
  };

  const get = (): T => {
    return state;
  };

  const action = <F extends Action>(fn: F): F => {
    return fn;
  };

  const actions = template.actions?.({
    action,
    set,
    get,
  });

  return {
    name,
    get,
    set,
    ...((actions ?? {}) as A),
  };
};

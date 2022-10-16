export type Rec<T = unknown> = Record<string, T>;

export type Action = (...args: any[]) => any;

export type Actions = Rec<Action>;

export type ActionsUtils<T extends Rec> = {
  action: <F extends Action>(fn: F) => F;
  get: () => T;
  set: (state: Partial<T>) => void;
};

export type ActionsBuilder<T extends Rec, A extends Actions> = (utils: ActionsUtils<T>) => A | void;

export type RestoreTemplate<T extends Rec, A extends Actions> = {
  name: string;
  state: T;
  actions?: ActionsBuilder<T, A>;
};

export type Restore<T extends Rec, A extends Actions> = {
  name: string;
  get: () => T;
  set: (state: Partial<T>) => void;
} & A;

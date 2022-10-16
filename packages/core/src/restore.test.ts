import {restore} from './restore.constructor';
import {Restore} from './restore.types';

type CounterState = {
  count: number;
};

type CounterActions = {
  increment: () => void;
};

let counter: Restore<CounterState, CounterActions>;

const initState: CounterState = {
  count: 0,
};

beforeEach(() => {
  counter = restore({
    name: 'counter',
    state: initState,
    actions: ({action, set, get}) => {
      const increment = action(function increment() {
        set({
          count: get().count + 1,
        });
      });

      return {
        increment,
      };
    },
  });
});

describe('restore', () => {
  test('create', () => {
    expect(() => {
      return restore({
        name: 'counter',
        state: initState,
      });
    }).not.toThrow();
  });

  test('state', () => {
    expect(counter.get()).toEqual({
      count: 0,
    });
  });

  test('set', () => {
    counter.set({
      count: 1,
    });

    expect(counter.get()).toEqual({
      count: 1,
    });
  });

  test('action', () => {
    counter.increment();

    expect(counter.get()).toEqual({
      count: 1,
    });
  });
});

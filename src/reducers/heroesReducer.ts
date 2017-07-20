import { Action } from '../actions/heroesActions';
import { IHero } from '../interfaces';

export const FETCH_HEROES_LOADING = 'FETCH_HEROES_LOADING';
export const FETCH_HEROES_NOT_LOADING = 'FETCH_HEROES_NOT_LOADING';
export const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS';
export const FETCH_HEROES_ERROR = 'FETCH_HEROES_ERROR';

export type State = {
  readonly heroes: IHero[];
  readonly fetching: boolean;
  readonly error: Error | null;
};

const initialState: State = {
  heroes: [],
  fetching: false,
  error: null
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case FETCH_HEROES_LOADING: {
      return { ...state, fetching: true };
    }
    case FETCH_HEROES_NOT_LOADING: {
      return { ...state, fetching: false };
    }
    case FETCH_HEROES_ERROR: {
      return { ...state, error: action.error };
    }
    case FETCH_HEROES_SUCCESS: {
      return { ...state, heroes: action.payload };
    }
    default:
      return state;
  }
}

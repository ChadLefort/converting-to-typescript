import { combineReducers, Dispatch as ReduxDispatch } from 'redux';
import { reducer as heroes, State as HeroesState } from './heroesReducer';

export type RootState = {
  heroes: HeroesState;
};

export type Dispatch = ReduxDispatch<RootState>;

export const rootReducer = combineReducers<RootState>({
  heroes
});

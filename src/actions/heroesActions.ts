import axios from 'axios';
import { returntypeof } from 'react-redux-typescript';
import { ThunkAction } from 'redux-thunk';
import { IHero } from '../interfaces';
import { RootState } from '../reducers';
import {
  FETCH_HEROES_LOADING,
  FETCH_HEROES_NOT_LOADING,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_ERROR
} from '../reducers/heroesReducer';

export const EXTERNAL_API_ROOT_URL = 'https://overwatch-api.net/api/v1';

export const actionCreators = {
  fetchHeroesLoading: () => ({
    type: FETCH_HEROES_LOADING as typeof FETCH_HEROES_LOADING
  }),
  fetchHeroesNotLoading: () => ({
    type: FETCH_HEROES_NOT_LOADING as typeof FETCH_HEROES_NOT_LOADING
  }),
  fetchHeroesSuccess: (payload: IHero[]) => ({
    type: FETCH_HEROES_SUCCESS as typeof FETCH_HEROES_SUCCESS,
    payload
  }),
  fetchHeroesError: (error: Error) => ({
    type: FETCH_HEROES_ERROR as typeof FETCH_HEROES_ERROR,
    error
  }),
  fetchHeros: (): ThunkAction<Promise<void>, RootState, null> => async dispatch => {
    dispatch(actionCreators.fetchHeroesLoading());

    try {
      const response = await axios.get(`${EXTERNAL_API_ROOT_URL}/hero`);
      const heros = response.data.data as IHero[];

      dispatch(actionCreators.fetchHeroesSuccess(heros));
    } catch (error) {
      dispatch(actionCreators.fetchHeroesError(error));
    } finally {
      dispatch(actionCreators.fetchHeroesNotLoading());
    }
  }
};

const actionTypes = {
  fetchHeroesLoading: returntypeof(actionCreators.fetchHeroesLoading),
  fetchHeroesNotLoading: returntypeof(actionCreators.fetchHeroesNotLoading),
  fetchHeroesSuccess: returntypeof(actionCreators.fetchHeroesSuccess),
  fetchHeroesError: returntypeof(actionCreators.fetchHeroesError)
};

export type Action = typeof actionTypes[keyof typeof actionTypes];

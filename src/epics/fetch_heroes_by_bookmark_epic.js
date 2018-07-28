import {map} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import types from '../actions/types';
import {getHeroesResult} from "../actions/actions";

export default action$ => action$.pipe(
	ofType(types.FETCH_BOOKMARKED_HEROES),
	map(() => {
		return getHeroesResult(JSON.parse(localStorage.getItem('items')) || {})
	})
);
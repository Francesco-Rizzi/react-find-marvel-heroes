import {mergeMap, map} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {ofType} from 'redux-observable';

import types from '../actions/types';
import {MARVEL_KEY} from '../keys';
import {getHeroesResult} from "../actions/actions";

export default action$ => action$.pipe(
	ofType(types.FETCH_HEROES),
	mergeMap(( {payload} ) => ajax.getJSON(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${payload.query}&orderBy=name&apikey=${MARVEL_KEY}`).pipe(map(response => {
		
		const fetched = response.data.results;
		const saved = JSON.parse(localStorage.getItem('items')) || {};
		const res = {};
		
		fetched.map(item => {
			
			if(saved[item.id]){
				item.bookmark = true;
			} else {
				item.bookmark = false;
			}
			
			res[item.id] = item;
			return item;
			
		});
		
		return getHeroesResult(res);
		
	})))
);
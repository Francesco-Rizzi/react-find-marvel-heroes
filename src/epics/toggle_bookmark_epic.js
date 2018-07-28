import {map} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import types from '../actions/types';
import {updateHero} from "../actions/actions";

export default ( action$ ) => action$.pipe(ofType(types.BOOKMARK_HERO), map(( {payload} ) =>{
	
	const hero    = JSON.parse(JSON.stringify(payload.hero)); //DEEP CLONE TO PROPER PROPAGATE THE UPDATE
	hero.bookmark = !hero.bookmark;
	
	//Update saved
	let items = JSON.parse(localStorage.getItem('items')) || {};
	
	if ( hero.bookmark ) {
		items[ hero.id ] = hero;
	} else {
		delete items[ hero.id ];
	}
	
	localStorage.setItem('items', JSON.stringify(items));
	
	//Update view
	return updateHero(hero);
	
}));

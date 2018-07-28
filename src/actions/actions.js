import types from '../actions/types';

export function fetchHeroesByQuery( query ){
	
	return {
		type    : types.FETCH_HEROES,
		payload : {query}
	};
	
}

export function toggleBookmark( hero ){
	
	return {
		type    : types.BOOKMARK_HERO,
		payload : {hero}
	};
	
}

export function fetchHeroesByBookmark(){
	
	return {
		type : types.FETCH_BOOKMARKED_HEROES,
		payload : {}
	};
	
}

export function getHeroesResult( heroes ){
	
	return {
		type  : types.FETCH_HEROES_RESULT,
		payload : heroes
	};
	
}

export function updateHero( hero){
	
	return {
		type  : types.UPDATE_HERO,
		payload : hero
	};
	
}
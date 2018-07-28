import types from '../actions/types';

const initialState = {
	heroes  : [],
	loading : false,
};

export default function( state = initialState, action ){
	switch ( action.type ) {
		
		case types.FETCH_HEROES:
			return {
				...state,
				loading : true
			};
		
		case types.FETCH_HEROES_RESULT:
			return {
				...state,
				heroes  : action.payload,
				loading : false
			};
		
		case types.UPDATE_HERO:
			const hero = action.payload;
			return {
				...state,
				heroes  : {
					...state.heroes,
					[hero.id]: hero
				}
			};
		
		default:
			return state;
		
	}
}
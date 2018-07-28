import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import rootReducer from './reducers/root_reducer.js';
import rootEpic from './epics/root_epic.js';

const epicMiddleware = createEpicMiddleware();

export default function configureStore(){
	const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
	
	epicMiddleware.run(rootEpic);
	
	return store;
}
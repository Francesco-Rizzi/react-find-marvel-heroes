import {combineEpics} from 'redux-observable';

import toggle_bookmark from './toggle_bookmark_epic';
import fetch_epic from './fetch_heroes_epic';
import fetch_by_bookmark_epic from './fetch_heroes_by_bookmark_epic';

export default combineEpics(fetch_epic, fetch_by_bookmark_epic, toggle_bookmark);

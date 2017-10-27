import {combineReducers} from 'redux';

import enemies from './enemiesReducer';
import hero from './heroReducer';
import stars from './starReducer';
import app from './appReducer';
import gameover from './gameoverReducer';

export default combineReducers({
    enemies,
    hero,
    stars,
    app,
    gameover
})
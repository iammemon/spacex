import { Observable } from 'rxjs';

import * as config from '../constants/appConfig';
import * as actionTypes from '../constants/actionTypes';


export function starFieldEpic(action$) {
    
    return action$.ofType(actionTypes.START_APP)
                  .merge(Observable.interval(config.SPEED))
                  .map(() => ({ type: actionTypes.MOVE_STARS }))
                  .takeUntil(action$.ofType(actionTypes.GAME_OVER))
    
}
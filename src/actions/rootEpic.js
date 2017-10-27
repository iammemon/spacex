import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { gameOverEpic,countScoreEpic,startAppEpic } from './appActions';
import { starFieldEpic } from './starsAction';
import { spaceShipEpic, spaceShipFiringEpic } from './heroActions';
import { enemyEpic, enemiesMoveEpic, enemiesFireEpic } from './enemyActions';

const allEpics = combineEpics(

    countScoreEpic,
    gameOverEpic,
    startAppEpic,
    starFieldEpic,
    spaceShipEpic,
    spaceShipFiringEpic,
    enemyEpic,
    enemiesMoveEpic,
    enemiesFireEpic
)

export default createEpicMiddleware(allEpics)


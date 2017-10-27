import * as actionTypes from '../constants/actionTypes';
import * as config from '../constants/appConfig';
import { canvas } from '../canvas';
import { getRandomInt, IsVisible } from '../constants/helpers'

export default function reducer(state = [], action) {

    switch (action.type) {
        case actionTypes.CREATE_ENEMY: {
            return state.concat([{
                x: parseInt(Math.random() * canvas.width),
                y: -30,
                Isdead: false,
                shots: []
            }])
        }
        case actionTypes.MOVE_ENEMIES: {

            return state.filter(enemy=> (enemy.Isdead && enemy.shots.length!=0) || (!enemy.Isdead) )
                        .map(enemy => {
                            if (!enemy.Isdead) {
                                enemy.x += getRandomInt(-15, 15)
                                enemy.y += 5
                            }

                            return enemy
                        })
                        .filter(IsVisible);

        }
        case actionTypes.ENEMIES_FIRING: {
            if (action.payload == "FIRE") {
                return state.map(enemy => {
                    if(!enemy.Isdead){
                        enemy.shots = enemy.shots.concat([{ x: enemy.x, y: enemy.y }])
                    }
                    return enemy
                })
            }
            else {
                return state.map(enemy => {
                    enemy.shots.forEach(shot => {
                        shot.y += config.SHOOTING_SPEED;
                        return shot;
                    })
                    enemy.shots = enemy.shots.filter(IsVisible)
                    return enemy;
                })
            }

        }
        case actionTypes.SCORE_UPDATE: {

            return state.map((enemy, index) => {
                if (index == action.payload.enemyIndex) {
                    enemy.Isdead = true;
                }
                return enemy;
            })

        }
        default: {
            return state;
        }
    }

}
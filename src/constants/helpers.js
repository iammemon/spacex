import { drawTriangle, canvas } from '../canvas'
import * as config from '../constants/appConfig';

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const IsVisible = (obj) => {
    //to check if obj is visible on screen
    return obj.x > -40 && obj.x < canvas.width + 40 &&
        obj.y > -40 && obj.y < canvas.height + 40
}

export const collision = (target1, target2) => {

    return (target1.x > target2.x - 15 && target1.x < target2.x + 15) &&
        (target1.y > target2.y - 15 && target1.y < target2.y + 15);

}

export const paintSpaceShip = (spaceship) => {
    drawTriangle(spaceship.x, spaceship.y, 20, '#ff0000', 'up');
}

export const paintHeroShots = (shots) => {
    if (!shots) return;

    shots.forEach((shot) => {
        drawTriangle(shot.x, shot.y, 5, '#ffff00', 'up');
    })
}

export const paintEnemies = (enemies) => {
    if (!enemies) return;

    enemies.forEach((enemy) => {
        if(!enemy.Isdead){
            drawTriangle(enemy.x, enemy.y, 20, '#00ff00', 'down');
        }
        enemy.shots.forEach(shot => {
            drawTriangle(shot.x, shot.y, 5, '#00ffff', 'down');
        })
    })

}


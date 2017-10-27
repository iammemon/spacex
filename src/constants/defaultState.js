import * as config from './appConfig';
import { canvas } from '../canvas';


export const stars = () => {
    let starArray = [];
    for (let i = 1; i <= config.STAR_NUMBERS; i++) {
        starArray.push({
            x: parseInt(Math.random() * canvas.width),
            y: parseInt(Math.random() * canvas.height),
            size: Math.random() * 3 + 1
        })
    }
    return starArray;
}

export const hero = () => {
    return {
        x: canvas.width / 2,
        y: canvas.height - 30,
        shots: []
    }
}

export const app=()=>{
    return {
        Isstart:false,
        gameover:false,
        score:0
    }
}

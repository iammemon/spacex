//canvas creation
const canvas=document.createElement('canvas');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
//canvas context
const ctx=canvas.getContext('2d');
document.body.appendChild(canvas);
//space background with stars
const paintStars=(stars)=>{
    //creating background
    ctx.fillStyle='#000000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //creating stars
    ctx.fillStyle='#ffffff';
    stars.forEach((star)=>{
        ctx.fillRect(star.x,star.y,star.size,star.size);
    })
}
//to draw spaceship for hero and enemies
const drawTriangle=(x,y,width,color,direction)=>{
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.moveTo(x-width,y);
    ctx.lineTo(x,direction==='up'? y-width : y+width );
    ctx.lineTo(x+width,y);
    ctx.lineTo(x-width,y);
    ctx.fill();
}
const paintScore=(score)=>{
    ctx.fillStyle='white';
    ctx.font='bold 30px arcade';
    ctx.fillText('Score: '+score,40,43);
}
const paintWelcome=(start)=>{
    if(start) return

    ctx.fillStyle='white';
    ctx.font='60px arcade';
    ctx.fillText('Welcome  To ',(canvas.width/2)-280,(canvas.height/2)-50)
    ctx.font='bold 80px arcade';
    ctx.fillStyle='magenta';
    ctx.fillText('spaceX ',(canvas.width/2)-200+250,(canvas.height/2)-50)
    ctx.fillStyle='white';
    ctx.font='45px arcade';
    ctx.fillText('Press   Enter   to   Play',(canvas.width/2)-210,(canvas.height/2)+60);
}
const paintGameOver=(gameover)=>{
    if(gameover){
        ctx.fillStyle='white';
        ctx.font='bold 48px arcade';
        ctx.fillText('Game Over ',(canvas.width/2)-120,canvas.height/2);
    }
  
}

export {canvas,paintStars,paintScore,paintGameOver,drawTriangle,paintWelcome}
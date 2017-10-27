import 'howler';

export const gameOverSound = new Howl({
    src:['..//assets/sounds/gameovervoice.wav']
})

export const backgroundMusic= new Howl({
    src:['../assets/sounds/forestTheme.mp3'],
    loop:true
})

export const titleTheme= new Howl({
    src:['../assets/sounds/titleTheme.mp3'],
    loop:true
})

export const startVoiceSound= new Howl({
    src:['../assets/sounds/startvoice.wav'],

})

export const laserSound= new Howl({
    src:['../assets/sounds/laser.wav']
})

export const hitSound= new Howl({
    src:['../assets/sounds/hit.wav']
})
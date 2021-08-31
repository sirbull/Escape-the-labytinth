scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    game.over(true)
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    game.over(false)
})
game.showLongText("You are stuck in an     unknown labyrith...", DialogLayout.Bottom)
game.showLongText("Get out before it       collapses!", DialogLayout.Bottom)
music.setVolume(50)
let Character = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 5 d d d d d d 5 7 . . . 
    . . . 5 d 1 f d d f 1 d 5 . . . 
    . . . . d 1 f d d f 1 d . . . . 
    . . . . d 1 f d d f 1 d . . . . 
    . . . 2 2 d d d d d d 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . d 2 2 2 2 2 2 2 2 d . . . 
    . . . f f f f f f f f f f . . . 
    . . . . 7 . . . . . . 7 . . . . 
    . . . f f . . . . . . f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Character.setPosition(90, 120)
scene.cameraFollowSprite(Character)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(Character)
info.startCountdown(10)
game.onUpdate(function () {
    scene.cameraShake(2, 100)
})
forever(function () {
    music.playMelody("D B D C D G D F ", 880)
    music.playMelody("D B D C D G D F ", 880)
    music.playMelody("D A D C D F D E ", 880)
    music.playMelody("D A D C D F D E ", 880)
})

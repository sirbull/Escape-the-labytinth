namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
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
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010b010101010101010b0101010407060406060701060107060406010b060b01010109010106090101010601010601070606060406060606060606010106090601010b01010104090101060101060106010706060601060d060107010b060107010601010407060607010601010401010104080b060101010109060b0c0606070101010906010601060606010a0901060b0607060601060101010101031001060106010601010606060906010a11010706060b0604060701070106010c0f01010901010101010101060607010113120e0606060606060601090d060b010901010b01010101090706040706010101010101010101010101010b010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . 2 . . . . 2 
2 . 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 2 2 . 2 2 2 . 2 
2 . 2 . 2 . . . . 2 . 2 . 2 . 2 
2 . 2 . 2 . 2 2 . . . . . 2 . 2 
2 . 2 2 2 . 2 2 . 2 2 2 2 2 . 2 
2 . . . 2 2 2 2 . 2 . 2 . . . 2 
2 2 2 . 2 . . . . 2 . 2 2 2 2 2 
. . 2 . 2 . 2 . 2 2 . . . 2 . 2 
2 . 2 . . . 2 . . . . 2 . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . . . 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorLight0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.doorOpenEast,sprites.dungeon.floorLight1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight5,sprites.dungeon.floorLight3,sprites.dungeon.floorDark3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.floorDark4,sprites.dungeon.floorDark1],
            TileScale.Sixteen
        ))
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

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
    //% blockIdentity=images._tile
    export const tile1 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 2 2 2 2 5 5 2 2 2 2 5 5 5 
5 5 5 2 2 2 2 5 5 2 2 2 2 5 5 5 
5 5 5 2 2 2 2 5 5 2 2 2 2 5 5 5 
5 5 5 2 2 2 2 5 5 2 2 2 2 5 5 5 
5 5 5 2 2 2 2 5 5 2 2 2 2 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 2 2 5 5 5 5 5 5 5 5 2 2 5 5 
5 5 5 2 5 5 5 5 5 5 5 5 2 5 5 5 
5 5 5 2 2 2 2 2 2 2 2 2 2 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.blizzard.startScreenEffect(10000)
})
controller.combos.attachCombo("A+B", function () {
    effects.starField.startScreenEffect(10000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.clouds.startScreenEffect(10000)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 4 4 4 . . . . 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 f f f f f f f f 4 . . . 
. . . 4 f 2 f f f f 2 f 4 . . . 
. . . 4 f 2 2 f f 2 2 f 4 . . . 
. . . 4 f f 4 4 4 4 f f 4 . . . 
. f f 4 4 4 f 4 4 f 4 4 4 f f . 
. f f . 2 2 4 4 4 4 2 2 . f f . 
. 2 f 2 2 2 2 2 2 2 2 2 2 f 2 . 
. f 2 2 2 f f f f f f 2 2 2 f . 
. 2 f . 2 f 5 f 5 f f 2 . f 2 . 
. f 2 . 2 f f 5 5 f f 2 . 2 f . 
. f f . 2 f f 5 f 5 f 2 . f f . 
. f f . 2 f f f f f f 2 . f f . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 2 . . . . 2 2 . . . . 
. . . . 2 2 . . . . 2 2 . . . . 
. . . . 2 2 . . . . 2 2 . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(8)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tiles.createTilemap(
            hex`0a000a0001000001000100010001000000000000000000000001000000010001000101000000000000000000000100010000000000000100010000010001000100000000000000000000000000000000000000000100000100010001000100010100010000000100`,
            img`
2 . . 2 . 2 . 2 . 2 
. . . . . . . . . . 
. 2 . . . 2 . 2 . 2 
2 . . . . . . . . . 
. 2 . 2 . . . . . . 
2 . 2 . . 2 . 2 . 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1],
            TileScale.Sixteen
        ))

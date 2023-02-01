input.onButtonPressed(Button.A, function () {
    pajaro.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    pajaro.change(LedSpriteProperty.Y, -1)
})
let empty_obstacle = 0
let ticks = 0
let pajaro: game.LedSprite = null
pajaro = game.createSprite(0, 2)
pajaro.set(LedSpriteProperty.Blink, 300)
let obstaculos: game.LedSprite[] = []
let indice = 0
basic.forever(function () {
    while (obstaculos.length > 0 && obstaculos[0].get(LedSpriteProperty.X) == 0) {
        obstaculos.removeAt(0).delete()
    }
    for (let obstacle of obstaculos) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        empty_obstacle = randint(0, 4)
        for (let indice = 0; indice <= 4; indice++) {
            if (indice != empty_obstacle) {
                obstaculos.push(game.createSprite(4, indice))
            }
        }
    }
    for (let obstacle of obstaculos) {
        if (obstacle.get(LedSpriteProperty.X) == pajaro.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == pajaro.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})

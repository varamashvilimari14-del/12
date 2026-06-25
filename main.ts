input.onButtonPressed(Button.A, function () {
    if (player > 0) {
        player += -1
    }
})
function draw () {
    basic.clearScreen()
    led.plot(player, 4)
    led.plot(enemyX, enemyY)
}
input.onButtonPressed(Button.B, function () {
    if (player < 4) {
        player += 1
    }
})
let score = 0
let enemyY = 0
let enemyX = 0
let player = 0
player = 2
enemyX = randint(0, 4)
basic.showString("GO!")
basic.forever(function () {
    enemyY += 1
    if (enemyY == 4 && enemyX == player) {
        basic.showIcon(IconNames.Sad)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(500)
        basic.showNumber(score)
        score = 0
        enemyY = 0
        enemyX = randint(0, 4)
    }
    if (enemyY > 4) {
        enemyY = 0
        enemyX = randint(0, 4)
        score += 1
    }
    draw()
    basic.pause(300)
})

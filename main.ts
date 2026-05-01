let current_temperature = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(input.temperature())
    basic.pause(500)
})

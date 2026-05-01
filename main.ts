let current_temperature = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.clearScreen()
})
basic.forever(function on_forever() {
    
    current_temperature = input.temperature()
    basic.showNumber(input.temperature())
    basic.pause(500)
})

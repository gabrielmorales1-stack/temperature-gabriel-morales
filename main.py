current_temperature = 0

def on_button_pressed_a():
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global current_temperature
    current_temperature = input.temperature()
    basic.show_number(input.temperature())
    basic.pause(500)
basic.forever(on_forever)

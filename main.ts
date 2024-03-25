function ridica () {
    robotbit.GeekServo(robotbit.Servos.S1, 0)
}
input.onButtonPressed(Button.A, function () {
    stanga()
    basic.pause(500)
    coboara()
    basic.pause(500)
    inchide()
    basic.pause(500)
    ridica()
    basic.pause(500)
    dreapta()
    basic.pause(500)
    coboara()
    basic.pause(500)
    deschide()
    basic.pause(500)
    ridica()
})
function coboara () {
    robotbit.GeekServo(robotbit.Servos.S1, 35)
}
function inchide () {
    robotbit.MotorRunDelay(robotbit.Motors.M1B, 100, 1.7)
}
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
function dreapta () {
    robotbit.MotorRunDelay(robotbit.Motors.M1A, -100, 0.7)
}
function deschide () {
    robotbit.MotorRunDelay(robotbit.Motors.M1B, -100, 1.7)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index <= 4; index++) {
        strip.setPixelColor((index + 0) % 4, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(500)
        strip.setPixelColor((index + 1) % 4, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(500)
        strip.setPixelColor((index + 2) % 4, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(500)
        strip.setPixelColor((index + 3) % 4, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(500)
    }
})
function stanga () {
    robotbit.MotorRunDelay(robotbit.Motors.M1A, 100, 0.7)
}
let strip: neopixel.Strip = null
robotbit.GeekServo(robotbit.Servos.S1, 0)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Chessboard)

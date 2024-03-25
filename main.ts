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
function dreapta () {
    robotbit.MotorRunDelay(robotbit.Motors.M1A, -100, 0.7)
}
function deschide () {
    robotbit.MotorRunDelay(robotbit.Motors.M1B, -100, 1.7)
}
function stanga () {
    robotbit.MotorRunDelay(robotbit.Motors.M1A, 100, 0.7)
}
robotbit.GeekServo(robotbit.Servos.S1, 0)
basic.showIcon(IconNames.Chessboard)

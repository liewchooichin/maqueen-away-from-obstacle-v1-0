function backward_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 15)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
}
function forward_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
}
function forward_right () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}
function is_obstacle () {
    if (maqueen.Ultrasonic() <= C_OBSTACLE) {
        return true
    } else {
        return false
    }
}
function move_away () {
    if (is_obstacle()) {
        basic.showString("B")
        new_position = randint(0, 3)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
        while (is_obstacle()) {
            if (new_position == 0) {
                basic.showNumber(0)
                backward_left()
            } else if (new_position == 1) {
                basic.showNumber(1)
                backward_left()
            } else if (new_position == 2) {
                basic.showNumber(2)
                forward_left()
            } else {
                basic.showNumber(3)
                forward_right()
            }
        }
    } else {
        basic.showString("F")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
}
function backward_left () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 15)
}
let new_position = 0
let C_OBSTACLE = 0
C_OBSTACLE = 5
basic.forever(function () {
    move_away()
})

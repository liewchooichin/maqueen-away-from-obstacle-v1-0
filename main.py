def backward_right():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 15)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
def forward_left():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 20)
def forward_right():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
def is_obstacle():
    if maqueen.ultrasonic() <= C_OBSTACLE:
        return True
    else:
        return False
def move_away():
    global new_position
    if is_obstacle():
        basic.show_string("B")
        new_position = randint(0, 3)
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 25)
        while is_obstacle():
            if new_position == 0:
                basic.show_number(0)
                backward_left()
            elif new_position == 1:
                basic.show_number(1)
                backward_left()
            elif new_position == 2:
                basic.show_number(2)
                forward_left()
            else:
                basic.show_number(3)
                forward_right()
    else:
        basic.show_string("F")
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 20)
def backward_left():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 15)
new_position = 0
C_OBSTACLE = 0
C_OBSTACLE = 5

def on_forever():
    move_away()
basic.forever(on_forever)

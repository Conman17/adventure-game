input.onButtonPressed(Button.A, function () {
    Character.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Character.change(LedSpriteProperty.Y, 1)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A button 1") {
        Character.change(LedSpriteProperty.X, -1)
    }
    if (receivedString == "NO") {
        Character.change(LedSpriteProperty.Y, 1)
    }
    if (receivedString == "TTRE") {
        Character.change(LedSpriteProperty.X, 1)
    }
    if (receivedString == "LOGO PRESSED") {
        Character.change(LedSpriteProperty.Y, -1)
    }
    if (receivedString == "Press one") {
        basic.showString("Connected")
    }
})
input.onButtonPressed(Button.B, function () {
    Character.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Character.change(LedSpriteProperty.Y, -1)
})
let string = 0
let Variable = 0
let Point = 0
let Character: game.LedSprite = null
radio.setGroup(147)
Character = game.createSprite(2, 2)
let Actual_egg = 0
let Show = 0
basic.forever(function () {
    if (Point == 3) {
        basic.showString("YOU WIN")
        Character.set(LedSpriteProperty.X, 2)
        Character.set(LedSpriteProperty.Y, 2)
        Variable = 0
        Point = 0
        if (string == 1) {
            string = 2
        } else {
            string = 0
        }
    }
    if (Variable == 0) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 0) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 1) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 2) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 3) {
                game.gameOver()
            } else {
                if (Character.get(LedSpriteProperty.X) == 4) {
                    game.gameOver()
                }
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 0) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 3) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 4) {
                game.gameOver()
            } else {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                }
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Variable = 1
            Character.set(LedSpriteProperty.X, 3)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Character.set(LedSpriteProperty.X, 1)
            Variable = 4
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Character.set(LedSpriteProperty.Y, 3)
                Variable = 3
            }
        }
    }
    if (Variable == 1) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(4, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        if (string == 2) {
            Variable = 92
            basic.pause(500)
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                if (string == 1) {
                    Variable = 17
                    Character.set(LedSpriteProperty.X, 3)
                    Character.set(LedSpriteProperty.Y, 1)
                } else {
                    game.gameOver()
                }
            }
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Character.set(LedSpriteProperty.X, 1)
            Variable = 0
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Character.set(LedSpriteProperty.Y, 3)
                Variable = 2
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 0) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 1) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 2) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 3) {
                game.gameOver()
            } else {
                if (Character.get(LedSpriteProperty.X) == 4) {
                    game.gameOver()
                }
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 2) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 4) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 0) {
                game.gameOver()
            } else {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                }
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                game.gameOver()
            } else {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    game.gameOver()
                }
            }
        }
    }
    if (Variable == 2) {
        led.plot(0, 4)
        led.plot(0, 3)
        led.plot(0, 2)
        led.plot(0, 1)
        led.plot(0, 0)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(4, 4)
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.Y) == 1) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.Y) == 3) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.Y) == 4) {
                game.gameOver()
            } else {
                if (Character.get(LedSpriteProperty.Y) == 2) {
                    game.gameOver()
                }
            }
        } else if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 0) {
                game.gameOver()
            } else if (Character.get(LedSpriteProperty.X) == 2) {
                game.gameOver()
            } else {
                if (Character.get(LedSpriteProperty.X) == 4) {
                    game.gameOver()
                }
            }
        } else {
            if (Character.get(LedSpriteProperty.X) == 4) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.Y) == 0) {
                if (Character.get(LedSpriteProperty.X) == 1) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 2) {
                    game.gameOver()
                } else if (Character.get(LedSpriteProperty.X) == 3) {
                    game.gameOver()
                } else {
                    if (Character.get(LedSpriteProperty.X) == 4) {
                        game.gameOver()
                    }
                }
            }
        }
        if (Point == 2) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    string = 1
                }
            }
        } else {
            if (Character.get(LedSpriteProperty.X) == 1) {
                if (Character.get(LedSpriteProperty.Y) == 4) {
                    game.gameOver()
                }
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 1)
                Variable = 1
            }
        }
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                if (Point == 0) {
                    Point += 1
                    basic.showIcon(IconNames.Yes)
                }
            }
        }
    }
    if (Variable == 3) {
        led.plot(0, 4)
        led.plot(0, 3)
        led.plot(0, 2)
        led.plot(0, 1)
        led.plot(0, 0)
        led.plot(1, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        if (Actual_egg == 1) {
            Variable = 32
            basic.pause(500)
            basic.showString("CONGRADULATIONS!!!")
            basic.pause(500)
            Variable = 0
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 0) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 1) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 3) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 4) {
                game.gameOver()
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                if (Point == 1) {
                    Point += 1
                    basic.showIcon(IconNames.Yes)
                }
            }
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Character.set(LedSpriteProperty.Y, 1)
                Variable = 0
            }
        }
    }
    if (Variable == 4) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        led.plot(3, 4)
        led.plot(2, 4)
        led.plot(1, 4)
        led.plot(0, 4)
        if (Character.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                if (Point == 2) {
                    basic.showIcon(IconNames.Yes)
                    Point += 1
                }
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Character.set(LedSpriteProperty.X, 3)
            Variable = 0
        }
    }
    if (Variable == 17) {
        led.plot(4, 0)
        led.plot(4, 2)
        led.plot(4, 3)
        led.plot(4, 4)
        led.plot(3, 0)
        led.plot(2, 0)
        led.plot(1, 0)
        led.plot(0, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(0, 4)
        led.plot(0, 3)
        led.plot(0, 2)
        led.plot(2, 4)
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Variable = 27
                basic.pause(100)
                Character.set(LedSpriteProperty.X, 3)
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            if (Character.get(LedSpriteProperty.Y) == 4) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.Y) == 3) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.Y) == 2) {
                game.gameOver()
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.Y) == 3) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.Y) == 4) {
                game.gameOver()
            }
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.Y) == 3) {
                game.gameOver()
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 2) {
                game.gameOver()
            }
            if (Character.get(LedSpriteProperty.X) == 1) {
                game.gameOver()
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Variable = 0
                Character.set(LedSpriteProperty.Y, 2)
                Character.set(LedSpriteProperty.X, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Variable = 32
                basic.pause(500)
                basic.showString("CREATED BY CONNOR INGERSOLL")
                string = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
    }
    if (Variable == 32) {
        if (Character.get(LedSpriteProperty.X) == 0) {
            Variable = 0
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Variable = 0
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Variable = 0
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            Variable = 0
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
    }
    if (Variable == 27) {
        led.plot(1, 4)
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 4) {
                Variable = 0
                Point = 0
                string = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
    }
    if (Variable == 92) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(2, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(0, 1)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(4, 4)
        led.plot(3, 4)
        led.plot(2, 4)
        led.plot(1, 4)
        led.plot(4, 0)
        if (Character.get(LedSpriteProperty.X) == 4) {
            Variable = 0
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Variable = 0
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 0) {
                Variable = 663
                basic.pause(500)
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
    }
    if (Variable == 663) {
        if (Show == 0) {
            led.plot(2, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 2) {
            if (Character.get(LedSpriteProperty.Y) == 2) {
                Show = 1
                Actual_egg = 1
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Variable = 0
            basic.pause(200)
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Variable = 0
            basic.pause(200)
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            Variable = 0
            basic.pause(200)
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Variable = 0
            basic.pause(200)
            Character.set(LedSpriteProperty.X, 2)
            Character.set(LedSpriteProperty.Y, 2)
        }
    }
})

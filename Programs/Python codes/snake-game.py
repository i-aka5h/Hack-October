import pygame as pg
import random

pg.init()

w = (255,255,255)
r = (255,0,0)
b = (0,0,0)

sW = 900
sH = 600
gW = pg.display.set_mode((sW,sH))

pg.display.set_caption('Snake Game')
pg.display.update()
clock = pg.time.Clock()
font = pg.font.SysFont(None,55)

def textScreen(text,color,x,y):
    screenText = font.render(text,True,color)
    gW.blit(screenText,[x,y])

def plotSnake(gW,color,sL,snakeSize):
    for x,y in sL:
        pg.draw.rect(gW, color, [x,y,snakeSize,snakeSize])


def gameLoop():
    exitGame = False
    gameOver = False
    snakeX = 45
    snakeY = 55
    vX = 0
    vY = 0
    sL = []
    snakeLength = 1

    foodX = random.randint(20, sW-20)
    foodY = random.randint(60, sH-20)
    score = 0
    initialVelocity = 4
    snakeSize = 30
    fps = 60

    while not exitGame:
        if gameOver:
            gW.fill(w)
            textScreen('Game Over! Press Enter To Continue',r,100,250)

            for event in pg.event.get():
                if event.type == pg.QUIT:
                    exitGame = True

                if event.type == pg.KEYDOWN:
                    if event.key == pg.K_RETURN:
                        gameLoop()

        else:
            for event in pg.event.get():
                if event.type == pg.QUIT:
                    exitGame = True

                if event.type == pg.KEYDOWN:
                    if event.key == pg.K_RIGHT:
                        vX = initialVelocity
                        vY = 0 

                    if event.key == pg.K_LEFT:
                        vX = -initialVelocity
                        vY = 0 
                    
                    if event.key == pg.K_UP:
                        vY = -initialVelocity
                        vX = 0 

                    if event.key == pg.K_DOWN:
                        vY = initialVelocity
                        vX = 0 

            snakeX = snakeX + vX
            snakeY = snakeY + vY

            if abs(snakeX - foodX) < 10 and abs(snakeY - foodY) < 10:
                score += 1
                foodX = random.randint(20, sW-30)
                foodY = random.randint(60, sH-30)
                snakeLength += 5 

            gW.fill(w)
            textScreen("Score : " + str(score*10), r, 5, 5)
            pg.draw.rect(gW, r, [foodX, foodY, snakeSize, snakeSize])
            pg.draw.line(gW, r, (0,40), (900,40), 5)

            head = []
            head.append(snakeX)
            head.append(snakeY)
            sL.append(head)

            if len(sL) > snakeLength:
                del sL[0]

            if head in sL[:-1]:
                gameOver = True

            if snakeX < 0 or snakeX > sW-20 or snakeY < 50 or snakeY > sH-20:
                gameOver = True

            plotSnake(gW, b, sL, snakeSize)

        pg.display.update()
        clock.tick(fps)

    pg.quit()
    quit()

gameLoop()

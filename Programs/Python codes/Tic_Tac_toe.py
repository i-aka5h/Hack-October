# Two Player + Single Player

import random

def var():
    print("")

var.a=[" "," "," "," "," "," "," "," "," "]
var.c=[1,2,3,4,5,6,7,8,9]

var.iscpu=0

def board():
    print("")
    print("\t ",var.a[0]," | ",var.a[1]," | ",var.a[2],"  |  1 | 2 | 3 ",sep="")
    print("\t----------- | -----------")
    print("\t ",var.a[3]," | ",var.a[4]," | ",var.a[5],"  |  4 | 5 | 6 ",sep="")
    print("\t----------- | -----------")
    print("\t ",var.a[6]," | ",var.a[7]," | ",var.a[8],"  |  7 | 8 | 9 ",sep="")
    print("")

def wrong():
    print("")
    print("Invalid Move !")

def win(x):
    c=0
    for i in range(len(var.a)):
       if var.a[i] != " ":
           c+=1
    if var.a[0] == x and var.a[1] == var.a[0] and var.a[1] == var.a[2]:
        var.a[0],var.a[1],var.a[2]='-','-','-'
        return 1
    elif var.a[0] == x and var.a[3] == var.a[0] and var.a[3] == var.a[6]:
        var.a[0],var.a[3],var.a[6]='-','-','-'
        return 1
    elif var.a[0] == x and var.a[4] == var.a[0] and var.a[4] == var.a[8]:
        var.a[0],var.a[4],var.a[8]='\\','\\','\\'
        return 1
    elif var.a[1] == x and var.a[1] == var.a[4] and var.a[4] == var.a[7]:
        var.a[1],var.a[4],var.a[7]='-','-','-'
        return 1
    elif var.a[2] == x and var.a[2] == var.a[5] and var.a[5] == var.a[8]:
        var.a[2],var.a[5],var.a[8]='-','-','-'
        return 1
    elif var.a[3] == x and var.a[3] == var.a[4] and var.a[4] == var.a[5]:
        var.a[3],var.a[4],var.a[5]='-','-','-'
        return 1
    elif var.a[6] == x and var.a[6] == var.a[7] and var.a[7] == var.a[8]:
        var.a[6],var.a[7],var.a[8]='-','-','-'
        return 1
    elif var.a[2] == x and var.a[4] == var.a[6] and var.a[4] == var.a[2]:
        var.a[6],var.a[4],var.a[2]='/','/','/'
        return 1
    elif c == 8:
        return 2
    else:
        return 0

def turn(x,y):
    if x > 0 and x < 10:
        if var.a[x-1] == " ":
            var.a[x-1]=y
        else:
            wrong()
            game(y)
    else:
        wrong()
        game(y)

def cpu(x):
    if var.a[0] == var.a[4] and var.a[0] == x and var.a[8] == " ":
        return 9
    elif var.a[2] == var.a[4] and var.a[2] == x and var.a[6] == " ":
        return 7
    elif var.a[2] == var.a[6] and var.a[2] == x and var.a[4] == " ":
        return 5
    elif var.a[6] == var.a[4] and var.a[6] == x and var.a[2] == " ":
        return 3
    elif var.a[0] == var.a[8] and var.a[0] == x and var.a[4] == " ":
        return 5
    elif var.a[4] == var.a[8] and var.a[8] == x and var.a[0] == " ":
        return 1
    for i in range(0,3):
        if var.a[3*i] == var.a[3*i +1] and var.a[3*i] == x and var.a[3*i + 2] == " ":
            return (3*i + 3)
        elif var.a[3*i] == var.a[3*i + 2] and var.a[3*i] == x and var.a[3*i + 1] == " ":
            return (3*i + 2)
        elif var.a[3*i + 1] == var.a[3*i + 2] and var.a[3*i + 1] == x and var.a[3*i] == " ":
            return (3*i + 1)
        elif var.a[i] == var.a[3+i] and var.a[i] == x and var.a[6+i] == " ":
            return (7+i)
        elif var.a[i] == var.a[6+i] and var.a[i] == x and var.a[3+i] == " ":
            return (4+i)
        elif var.a[6+i] == var.a[3+i] and var.a[6+1] == x and var.a[i] == " ":
            return (i+1)
    return 10

def ran():
    num=random.randint(1,9)
    if num in var.c:
        var.p=num
    else:
        ran()
def menu():
    var.a=[" "," "," "," "," "," "," "," "," "]
    var.c=[1,2,3,4,5,6,7,8,9]
    print("")
    print("-----------")
    print("Tic Tac Toe")
    print("-----------")
    print("1) Single Player")
    print("2) Multi Player")
    print("3) Exit")
    k=int(input("Enter Choice: "))
    if k == 1:
        var.iscpu=1
        game("O")
    if k == 2:
        game("O")
        

def game(x):
    if x == "O":
        y="X"
        q="Player 1"
    else:
        y="O"
        if var.iscpu == 1:
            q="CPU"
        else:
            q="Player 2"
    board()
    print(q,"'s (",x,") turn",sep='')
    if q != "CPU":
        var.p=int(input("Enter Num: "))
    else:
        var.p=cpu("X")
        if var.p == 10:
            var.p=cpu("O")
        if var.p == 10:
            ran()   
    turn(var.p,x)
    var.c.remove(var.p)
    won=win(x)
    if won == 0:
        game(y)
    elif won == 1:
        print(q,' wins the match')
        board()
        menu()
    elif won == 2:
        board()
        print("It's a Draw")
        menu()

menu()

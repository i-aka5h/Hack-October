import random
def game(ch1,ch2):
    val=0
    if(ch1==ch2):
        print("match tied")
        print("Play again!!")
        play()
    if(ch1==1 and ch2==2):
         val=0
    elif(ch1==2 and ch2==1):
        val=1
    elif(ch1==3 and ch2==1):
        val=0
    elif(ch1==1 and ch2==3):
        val=1
    elif(ch1==2 and ch2==3):
        val=0

    if ch1==1:
     ch1="Snake"
    elif ch1==2:
     ch1="water"
    else:
        ch1="gun"
    if ch2==1:
        ch2="Snake"
    elif ch2==2:
        ch2="water"
    else:
        ch2="gun"

    print("You choose =",ch1,"\nComputer choose =",ch2)
    return val

def play():
 print("Choose any of the following item(1-3) : ")
 print("\t 1. Snake \n \t 2. Water \n \t 3. Gun\n \t 4. Exit ")
 a=int(input("Enter any of the number from (1-3) = "))
 if a==4:
     exit()
 if(a<1 or a>3):
     print("Oops, you have entered the wrong number.\nPlease enter correct number this time.")
     play()
 b=random.randrange(1,4)
 c=game(a,b)

 if(c==0):
    print("Hurray, You won the game ")
    play()
 else:
    print("Sorry, better luck next time")
    ask()

def ask():
  i=input("Do you want to play again (YES/NO)? - ")
  if i.lower()=="yes" or i=="y":
     play()

play()







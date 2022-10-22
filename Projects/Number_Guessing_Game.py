import random
x = random.randint(1,50)
print("\nYou've only 6 chances to guess the integer!\n")
count = 0
while count < 6:
    count += 1
    guess = int(input("Guess a number:- "))
    if x == guess:
        print("Congratulations you guessed it in",count, " try")
        break
    elif x > guess:
        print("Guessed a bigger number!")
    elif x < guess:
        print("Guessed a smaller number!")
if count >= 6:
    print("\nThe number is %d" % x)
    print("\tBetter Luck Next time!")
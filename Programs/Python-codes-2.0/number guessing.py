import random
while(True):
  try:
    a=int(input("Enter any number between (1-100) = "))
    b=random.randrange(1,100)
    if a<1 or a>100:
        print("Please enter a valid number between 1-100.")
    else : break
  except ValueError:
    print("Please enter a valid integer number")

count = 1
while a!=b:
        print("Oops the number is incorrect.")
        if(a>b):
            a=int(input(f"Please enter number lower than {a} = "))
        else:
            a = int(input(f"Please enter number higher than {a} = "))
        count+=1
print("Congrats, You guess the right number ")
print(f"Your number = {a}\nComputer number = {b}")
print(f"It took {count} attempts to guess the right number.")





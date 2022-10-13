# Program to check if the number is an palindrome number or not

# take input from the user
n=int(input("Enter number: "))

# initialization
temp=n
rev=0
while(n>0):
    digit=n%10
    rev=rev*10+digit
    n=n//10

# display the result
if(temp==rev):
    print("The number is a palindrome!")
else:
    print("The number isn't a palindrome!")

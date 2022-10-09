from asyncio.windows_events import NULL


def twoSum(l,t):
    for i in l:
        if t-i in l:
            print(i, t-i)      #All possible solutions
            
l = list(map(int, input("Enter the list of numbers: ").split()))
targetNum = int(input("Enter target number: "))
twoSum(l,targetNum)

#Output

#Enter the list of numbers: 3 4 6 8
#Enter target number: 7
#3 4
#4 3

m = int(input())
n = int(input())


for i in range(1,min(m,n)+1):
    if m%i==0 and n%i==0:
        gcd= i


print("gcd of", m,"and",n,"is", gcd)
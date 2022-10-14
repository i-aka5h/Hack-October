def isPalindrome(s):
    return s == s[::-1]
 
 
s = "abba"

if isPalindrome(s):
    print("Yes")
else:
    print("No")

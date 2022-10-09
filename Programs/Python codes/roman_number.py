from cv2 import resize


class RomanNumerals:
    def to_roman(val):
        num = []
        thousands = val%1000
        if(val >= 1000):
            num.append('M' * (val//1000))
        if(val >= 900 and thousands < 1000):
            num.append('CM')
        fivehundreds = thousands%500
        if(thousands >= 500 and thousands<900):
            num.append('D')
        elif(thousands < 500 and thousands>= 400):
            num.append('CD')
        hundreds = fivehundreds%100
        if(fivehundreds >= 100 and fivehundreds<400):
            num.append('C'* (fivehundreds//100))
        fiftys = hundreds%50
        if(hundreds >= 50 and hundreds<90):
            num.append('L')
        if(hundreds >=90):
            num.append('XC')
        tens = fiftys%10
        if(fiftys >= 10 and fiftys<40):
            num.append('X'* (fiftys//10))
        fives = tens%5
        if(tens >= 5 and tens<9):
            num.append('V')
        elif(tens == 9):
            num.append('IX')
        ones = fives%1
        if(fives >= 1 and fives<4):
            num.append('I'*fives)
        elif(fives == 4 and tens < 5):
            num.append('IV')
        
        return ''.join(num)
        
    def from_roman(string):
        result = 0
        for i in range(0,len(string)):
            if (string[i] == "I"):
                if(i<len(string)-1):
                    if(string[i+1] == "V" or string[i+1] == "X"):
                        result = result - 1
                else:
                    result = result + 1

            if (string[i] == 'X'):
                if(i<len(string)-1):
                    if(string[i+1] == 'L' or string[i+1] == "C"):
                        result = result - 10
                else:
                    result = result + 10

            if (string[i] == "C"):
                if(i<len(string)-1):
                    if(string[i+1] == "D" or string[i+1] == "M"):
                        result = result - 100
                else:
                    result = result + 100
            if(string[i] == "M"):
                result = result + 1000
            if(string[i] == "D"):
                result = result + 500
            if(string[i] == "L"):
                result = result + 50

                
        return result
                

print(RomanNumerals.from_roman("MCMXC"))
#print(RomanNumerals.from_roman('MCMXC'))
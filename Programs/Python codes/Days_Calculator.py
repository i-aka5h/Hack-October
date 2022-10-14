class Date:
    def __init__(self, d, m, y):
        self.d = d
        self.m = m
        self.y = y


monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


def countLeapYears(d):
    years = d.y
    if d.m <= 2:
        years -= 1
    return int(years / 4) - int(years / 100) + int(years / 400)


def getDifference(date1, date2):
    n1 = date1.y * 365 + date1.d
    for i in range(0, date1.m - 1):
        n1 += monthDays[i]
    n1 += countLeapYears(date1)
    n2 = date2.y * 365 + date2.d

    for i in range(0, date2.m - 1):
        n2 += monthDays[i]
    n2 += countLeapYears(date2)
    return n2 - n1


date1 = Date(30, 6, 2020)
date2 = Date(25, 2, 2021)

print(getDifference(date1, date2), "days")

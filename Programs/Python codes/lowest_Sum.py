def sum(l):
    for i in range(0, len(l)):
        if(l[i] <0 ):
            continue
        else:
            l.sort()
            return l[0] + l[1]

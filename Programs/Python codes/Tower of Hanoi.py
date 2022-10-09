def Hanoi(n, start, end):
    if n == 1:
        print(f'move block {n} from tower {start} to tower {end}')
    else:
        temp = 6 - start - end
        Hanoi(n-1, start, temp)
        print(f'move block {n} from tower {start} to tower {end}')
        Hanoi(n-1, temp, end)

blocks = int(input('Enter number of blocks for tower of Hanoi: '))
Hanoi(blocks, 1, 3)

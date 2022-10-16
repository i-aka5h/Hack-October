from colorama import init, Fore, Style
init(autoreset=True)

colors = [
    'BLACK',
    'BLUE',
    'CYAN',
    'GREEN',
    'LIGHTBLACK_EX',
    'LIGHTBLUE_EX',
    'LIGHTCYAN_EX',
    'LIGHTGREEN_EX',
    'LIGHTMAGENTA_EX',
    'LIGHTRED_EX',
    'LIGHTWHITE_EX',
    'LIGHTYELLOW_EX',
    'MAGENTA',
    'RED',
    'WHITE',
    'YELLOW'
]

for col in colors:
    fcol = "Fore." + col
    fcol= eval(fcol)
    print(fcol+ col, Style.RESET_ALL)
import pyautogui
import time
time.sleep(5)
a=["city:VENTURA CA", "city:GREEN ACRES CA", "city:PALO ALTO CA", "city:IRVINE CA", "city:BERKELEY CA", "city:SUNNYVALE CA", "city:CARLSBAD CA", "city:TORRANCE CA", "city:SANTA CLARA CA", "city:SAN FRANCISCO CA"]
for i in a:
    b=str(i)
    pyautogui.typewrite(b)
    time.sleep(2)
    pyautogui.press('enter')
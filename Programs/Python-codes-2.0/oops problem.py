import pyautogui
import keyboard
import time
time.sleep(5)
v = 0
a = ["@Ryan sorry"]
for i in a:
    while True:
        if v == 100:
            exit()
        elif keyboard.is_pressed('shift'):
            exit()
        else:
            v = v + 1
            b = str(i)
            pyautogui.typewrite(b)
            pyautogui.press('enter')


import pyautogui
import time
import keyboard

time.sleep(3)
a = [46402, 46403, 46404, 46405, 46407, 46408, 46409,46410]
for i in a:
    # while True:
        if keyboard.is_pressed('shift'):
            exit()
        else:
            b = str(i)
            pyautogui.typewrite(b)
            pyautogui.press('enter')

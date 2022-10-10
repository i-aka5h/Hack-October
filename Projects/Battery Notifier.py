# Save this file with a pyw extension instead of py, to make the command window stay hidden when the file is run

import psutil, time
from win10toast import ToastNotifier
from datetime import datetime
import tkinter as tk 

root = tk.Tk()
root.withdraw()

now = datetime.now()
FMT = "%H:%M:%S"
end_time=now.strftime(FMT)
start_time=now.strftime(FMT)


# The if conditions in the times function do not work properly. Gotta fix them

def times() :
    battery = psutil.sensors_battery()
    
while True:
    times()
    battery = psutil.sensors_battery()
    if (getattr(battery, "percent") >= 98 and getattr(battery, "power_plugged")) or (getattr(battery, "percent") <= 25 and not getattr(battery, "power_plugged"))  :  
        msg="Unplug the charger!!" if (getattr(battery, "percent") >= 97) else "Plug the charger!!"
        toaster = ToastNotifier()
        toaster.show_toast(msg,"Charging Percent = "+ str(getattr(battery, "percent")) + "\n Time taken to drain =",duration=10,threaded=True)
    time.sleep(10)

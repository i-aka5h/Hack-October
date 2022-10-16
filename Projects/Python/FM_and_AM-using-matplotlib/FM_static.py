"""Program to demosntrate frequency modulation (FM) using static plots"""

import numpy as np
import matplotlib.pylab as plt

plt.close()

fm = float(input('Message Frequency='))  # 1
fc = float(input('Carrier Frequency='))  # 25
b = float(input('Modulation Index='))  # 10
t = np.arange(0, 1, 0.001)
fig, (ax1, ax2, ax3) = plt.subplots(3, 1)
fig.set_figheight(15)
fig.set_figwidth(15)

m = np.sin(2 * np.pi * fm * t)
# ax1.set_xlabel("Time")
ax1.set_ylabel("Amplitude")
ax1.title.set_text("Message Signal")
ax1.plot(t, m, color="orange")

c = np.sin(2 * np.pi * fc * t)
# ax2.set_xlabel("Time")
ax2.set_ylabel("Amplitude")
ax2.title.set_text("Carrier Signal")
ax2.plot(t, c)

y = np.sin(2 * np.pi * fc * t + (b * np.sin(2 * np.pi * fm * t)))

ax3.plot(t, y, color="black")
ax3.set_xlabel("Time")
ax3.set_ylabel("Amplitude")
ax3.title.set_text("FM Signal")

plt.show()

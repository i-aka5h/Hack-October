"""Program to demosntrate frequency modulation (FM) using static plots"""

import numpy as np  # numpy for Sine function
import matplotlib.pyplot as plt  # matplotlib for plotting functions

x = np.linspace(0, 2 * np.pi, 10000)
time = np.linspace(0, 150, 10000)

fm = float(input('Message Frequency='))
fc = float(input('Carrier Frequency='))
b = float(input('Modulation Index='))

fig = plt.figure()

fig.set_figheight(20)
fig.set_figwidth(20)

ax1 = fig.add_subplot(311)
ax1.spines['top'].set_visible(False)
ax1.spines['right'].set_visible(False)

ax2 = fig.add_subplot(312)
ax2.spines['top'].set_visible(False)
ax2.spines['right'].set_visible(False)

ax3 = fig.add_subplot(313)
ax3.spines['top'].set_visible(False)
ax3.spines['right'].set_visible(False)

plt.subplots_adjust(hspace=0.4, top=0.92, bottom=0.08)

for t in time:  # looping through the time values to plot each instance

    m = np.cos(x * fm * t)  # information signal
    ax1.clear()
    ax1.set_ylabel("Amplitude")
    ax1.title.set_text("Message Signal")
    ax1.plot(time, m, color="orange")

    c = np.sin(x * fc * t)
    ax2.clear()
    ax2.set_ylabel("Amplitude")
    ax2.title.set_text("Carrier Signal")
    ax2.plot(time, c)

    y = np.sin(x * fc * t + (b * np.sin(x * fm * t)))  # FM wave
    ax3.clear()
    ax3.plot(time, y, color="black", label="FM wave")
    ax3.plot(time, m, color="orange", label="Info. signal")
    ax3.legend(loc="upper right")
    ax3.set_xlabel("Time")
    ax3.set_ylabel("Amplitude")
    ax3.title.set_text("FM Signal")
    plt.pause(0.3)

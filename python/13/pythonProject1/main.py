
import subprocess
import webbrowser
import time
from win10toast import ToastNotifier
import random
import threading

toaster = ToastNotifier()

messages = [
    "Take a break",
    "It's time to chill",
    "Vreme je za odmor",
    "Predugo si ucio, 10 min pauze"
]

subprocess.Popen(["C:/Program Files/JetBrains/PyCharm 2024.1.3/bin/pycharm64.exe"])

webbrowser.get("C:/Program Files/Google/Chrome/Application/chrome.exe %s").open("https://itskola.net")

def show_notification():
    while True:
        toaster.show_toast("Reminder!", random.choice(messages), duration=5)
        time.sleep(5)

sn_thread = threading.Thread(target=show_notification)
sn_thread.start()



print("Hello world")
import re
from datetime import datetime

# Izvuci sva vremena iz logs/errors.log

times = []

with open('logs/errors.log') as error_log:

    # sablon: 2broja:2broja:2broja
    # 12:02:03
    pattern = r"12:\d{2}:\d{2}"

    for error in error_log.readlines():
        match = re.findall(pattern, error)
        times.extend(match)


# Prosecno vreme kada se desava greska
# Koliko se cesto desava greska ( u sekundama )
# Na svakih X sekundi se desi greska

# 12:01:12 -> datetime
# Pocetno vreme (kada se desila prva greska), poslednje greske
# poslednja_greska - pocetna_greska = koliko_je_vremena_proslo (5min)
# koliko_je_vremena_proslo / brojem_gresaka

# 12:05:00, 12:30:00
# 12:30 - 12:05 = 25
# 10 = 2.5min

start_time = datetime.strptime(times[0], "%H:%M:%S")
end_time = datetime.strptime(times[-1], "%H:%M:%S")

total_time_passed = end_time - start_time

average_time_between_errors = total_time_passed / len(times)

print(f"Prosecno vreme izmedju gresaka iznosi: {average_time_between_errors}")

# Algoritmi
# Rad sa bazama (2-3)
# OOP (Object oriented programming)

